/// <reference path="../../../../node_modules/@types/node/index.d.ts" />
import { Injectable } from '@angular/core'
import { BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs/Rx'

import * as MuteStructs from 'mute-structs'
import * as netflux from 'netflux'

const pb = require('./message_pb.js')

@Injectable()
export class NetworkService {

  private webChannel

  private joinSubject: AsyncSubject<number>
  private peerJoinSubject: ReplaySubject<number>
  private peerLeaveSubject: ReplaySubject<number>
  private peerPseudoSubject: BehaviorSubject<{id: number, pseudo: string}>
  private peerCursorSubject: BehaviorSubject<number>
  private peerSelectionSubject: BehaviorSubject<number>

  private remoteOperationsSubject: ReplaySubject<any>

  constructor() {
    this.joinSubject = new AsyncSubject<number>()
    this.peerJoinSubject = new ReplaySubject<number>()
    this.peerLeaveSubject = new ReplaySubject<number>()
    this.peerPseudoSubject = new BehaviorSubject<{id: number, pseudo: string}>({id: -1, pseudo: ''})

    this.remoteOperationsSubject = new ReplaySubject<any>()
    this.webChannel = netflux.create()

    // Peer JOIN event
    this.webChannel.onPeerJoin = (id) => this.peerJoinSubject.next(id)

    // Peer LEAVE event
    this.webChannel.onPeerLeave = (id) => this.peerLeaveSubject.next(id)

    // Message event
    this.webChannel.onMessage = (id, bytes, isBroadcast) => {
      let msg = pb.Message.deserializeBinary(bytes)
      switch (msg.getTypeCase()) {
        case pb.Message.TypeCase.PEERPSEUDO:
          this.peerPseudoSubject.next({ id, pseudo: msg.getPeerpseudo().getPseudo() })
          break
        case pb.Message.TypeCase.LOGOOTSADD:
          const logootSAddMsg = msg.getLogootsadd()
          const identifier = new MuteStructs.Identifier(logootSAddMsg.getId().getBaseList(), logootSAddMsg.getId().getLast())
          const logootSAdd: any = new MuteStructs.LogootSAdd(identifier, logootSAddMsg.getContent())
          log.info('operation:network', 'received insert: ', logootSAdd)
          this.remoteOperationsSubject.next(logootSAdd)
          break
        case pb.Message.TypeCase.LOGOOTSDEL:
          const logootSDelMsg: any = msg.getLogootsdel()
          const lid: any = logootSDelMsg.getLidList().map( (identifier: any) => {
            return new MuteStructs.IdentifierInterval(identifier.getBaseList(), identifier.getBegin(), identifier.getEnd())
          })
          const logootSDel: any = new MuteStructs.LogootSDel(lid)
          log.info('operation:network', 'received delete: ', logootSDel)
          this.remoteOperationsSubject.next(logootSDel)
          break
        case pb.Message.TypeCase.TYPE_NOT_SET:
          log.error('network', 'Protobuf: message type not set')
          break
      }
    }
  }

  get onJoin () {
    return this.joinSubject.asObservable()
  }

  get onPeerJoin () {
    return this.peerJoinSubject.asObservable()
  }

  get onPeerLeave () {
    return this.peerLeaveSubject.asObservable()
  }

  get onPeerPseudo () {
    return this.peerPseudoSubject.asObservable()
  }

  get onPeerCursor () {
    return this.peerCursorSubject.asObservable()
  }

  get onPeerSelection() {
    return this.peerSelectionSubject.asObservable()
  }

  get onRemoteOperations() {
    return this.remoteOperationsSubject.asObservable()
  }

  sendPeerPseudo (pseudo: string, id: number = -1) {
    let pseudoMsg = new pb.PeerPseudo()
    pseudoMsg.setPseudo(pseudo)
    let msg = new pb.Message()
    msg.setPeerpseudo(pseudoMsg)
    if (id !== -1) {
      this.webChannel.sendTo(id, msg.serializeBinary())
    } else {
      this.webChannel.send(msg.serializeBinary())
    }
  }

  sendLogootSAdd (logootSAdd: any) {
    const identifier = new pb.Identifier()

    identifier.setBaseList(logootSAdd.id.base)
    identifier.setLast(logootSAdd.id.last)

    const logootSAddMsg = new pb.LogootSAdd()
    logootSAddMsg.setId(identifier)
    logootSAddMsg.setContent(logootSAdd.l)

    const msg = new pb.Message()
    msg.setLogootsadd(logootSAddMsg)

    this.webChannel.send(msg.serializeBinary())
  }

  sendLogootSDel (logootSDel: any) {
    const lid: any[] = logootSDel.lid.map( (id: any) => {
      const identifierInterval: any = new pb.IdentifierInterval()
      identifierInterval.setBaseList(id.base)
      identifierInterval.setBegin(id.begin)
      identifierInterval.setEnd(id.end)
      return identifierInterval
    })

    const logootSDelMsg = new pb.LogootSDel()
    logootSDelMsg.setLidList(lid)

    const msg = new pb.Message()
    msg.setLogootsdel(logootSDelMsg)

    this.webChannel.send(msg.serializeBinary())
  }

  join (key) {
    // This is for demo to work out of the box.
    // FIXME: change after 8 of December (demo)
    return this.webChannel.open({key})
      .then(() => {
        log.info('network', `Opened a door with the signaling: ${this.webChannel.settings.signalingURL}`)
        this.joinSubject.next(this.webChannel.myId)
        this.joinSubject.complete()
      })
      .catch((reason) => {
        log.warn('Could not open a door with the signaling: '
          + `${this.webChannel.settings.signalingURL}: ${reason}`, this.webChannel)
          log.error('Hello world!', this.webChannel)
        log.error('Hello world! 2')
        log.trace('Hello world!', this.webChannel)
        return this.webChannel.join(key)
          .then(() => {
            log.info('network', `Joined via the signaling: ${this.webChannel.settings.signalingURL}`)
            this.joinSubject.next(this.webChannel.myId)
            this.joinSubject.complete()
          })
          .catch((reason) => {
            log.error('network', `Could not join via the signaling: ${this.webChannel.settings.signalingURL}: ${reason}`)
          })
      })
  }

  send (message: string) {
    this.webChannel(message)
  }

}