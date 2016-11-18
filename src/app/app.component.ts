import { Component } from '@angular/core'

import { environment } from '../environments/environment.prod'

@Component({
  selector: 'mute-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public ghdeploy: boolean

  constructor () {
    /*
     FIXME: Hide devlable for development. Leave it only got github deploy.
     Check: https://github.com/angular/angular-cli#build-targets-and-environment-files
     */
    this.ghdeploy = environment.ghdeploy
  }
}