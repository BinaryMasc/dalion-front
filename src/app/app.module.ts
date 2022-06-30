import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DalioncoinInfoComponent } from './components/dalioncoin-info/dalioncoin-info.component';
import { WorkshopmainComponent } from './components/workshop/workshopmain/workshopmain.component';
import { WsnavbarComponent } from './components/workshop/wsnavbar/wsnavbar.component';
import { LoginComponent } from './components/login/login.component';
import { OutSideClickDirective } from './out-side-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ErrorComponent,
    NavbarComponent,
    ProjectsComponent,
    DalioncoinInfoComponent,
    WorkshopmainComponent,
    WsnavbarComponent,
    LoginComponent,
    OutSideClickDirective
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
