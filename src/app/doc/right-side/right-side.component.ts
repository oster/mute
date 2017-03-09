import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Params } from '@angular/router'

import { NetworkService } from '../../doc/network'
import { ProfileService } from '../../core/profile/profile.service'
import { LocalStorageService } from '../../core/storage/local-storage/local-storage.service'
import { BotStorageService } from '../../core/storage/bot-storage/bot-storage.service'
import { Doc } from '../../core/Doc'
import { BotStorageCotact } from '../../core/storage/bot-storage/BotStorageContact'

@Component({
  selector: 'mute-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnDestroy, OnInit {

  private onDoorSubscription: Subscription

  public storages: Storage[]
  public signalingOk: boolean
  public networkOk: boolean

  constructor (
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private localStorage: LocalStorageService,
    private botStorage: BotStorageService,
    private networkService: NetworkService,
    public profile: ProfileService
  ) {
    this.storages = []
    this.signalingOk = false
    this.networkOk = false
  }

  ngOnInit () {
    this.route.data
      .subscribe(({doc}: {doc: Doc}) => {
        doc.isSaved()
          .then(() => {
            this.storages.push({
              tooltip: this.localStorage.home.title,
              icon: this.localStorage.home.icon
            })
          })
        doc.botIds.forEach((botId: string) => {
          const botFolder = this.botStorage.getBotFolder(botId)
          this.storages.push({
            tooltip: botFolder.title,
            icon: botFolder.icon
          })
        })
      })
    this.onDoorSubscription = this.networkService.onDoor.subscribe((opened) => {
      this.signalingOk = opened
      this.changeDetectorRef.detectChanges()
    })
    this.networkService.onJoin.subscribe((event) => {
      this.networkOk = true
    })
  }

  ngOnDestroy () {
    this.onDoorSubscription.unsubscribe()
  }

  toggleDoor () {
    // this.networkService.openDoor(!this.doorOpened)
  }

  updatePseudo (pseudo: string) {
    this.profile.pseudonym = pseudo
  }
}

interface Storage {
  tooltip: string
  icon: string
}
