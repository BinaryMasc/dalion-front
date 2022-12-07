import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showLogin : boolean;
  title = 'dalion-platform';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('language')?.toLowerCase() ?? "en");
    this.showLogin = false;

    console.log(translate.currentLang);
  }

  showLoginModal(flag : boolean){
    this.showLogin = flag;
  }
}
