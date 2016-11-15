import { Injectable } from '@angular/core'
import { BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs/Rx'
import * as netflux  from 'netflux'

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

  constructor() {
    this.joinSubject = new AsyncSubject<number>()
    this.peerJoinSubject = new ReplaySubject<number>()
    this.peerLeaveSubject = new ReplaySubject<number>()
    this.peerPseudoSubject = new BehaviorSubject<{id: number, pseudo: string}>({id: -1, pseudo: ''})
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

  join (key) {
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
        case pb.Message.TypeCase.TYPE_NOT_SET:
          console.error('Protobuf: message type not set')
          break
      }
    }

    // This is for demo to work out of the box.
    // FIXME: change after 8 of December (demo)
    return this.webChannel.open({key})
      .then(() => {
        console.log('Has OPENED')
      })
      .catch(() => {
        return this.webChannel.join(key)
          .then(() => {
            console.log('Has JOINED')
            this.joinSubject.next(this.webChannel.myId)
            this.joinSubject.complete()
          })
      })
  }

  send (message: string) {
    this.webChannel(message)
  }

}
