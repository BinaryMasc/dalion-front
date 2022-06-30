import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showLogin : boolean;
  title = 'dalion-platform';

  constructor(){
    this.showLogin = false;
  }

  showLoginModal(flag : boolean){
    this.showLogin = flag;
  }
}
