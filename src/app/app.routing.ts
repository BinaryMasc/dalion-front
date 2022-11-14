import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { DalioncoinInfoComponent } from "./components/dalioncoin-info/dalioncoin-info.component";
import { ErrorComponent } from "./components/error/error.component";
import { WorkshopmainComponent } from "./components/workshop/workshopmain/workshopmain.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { UserComponent } from "./components/workshop/user/user.component";
import { WsnavbarComponent } from "./components/workshop/wsnavbar/wsnavbar.component";
import { WsexploreComponent } from "./components/workshop/wsexplore/wsexplore.component";

const appRoutes: Routes = [
  /*
  {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'dalioncoin-info', component: DalioncoinInfoComponent},
    {path: 'sign-up', component : SignUpComponent},
    {path: 'workshop', component : WorkshopmainComponent},

    {path: '**', component : ErrorComponent}*/
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'dalioncoin-info', component: DalioncoinInfoComponent},
    {path: 'sign-up', component : SignUpComponent},
    {
      path: 'workshop',
      component: WorkshopmainComponent,
      children: [
        {
          path: '',
          children: [
            {path: '', component: WsexploreComponent},
            /*
            {path: 'my-services', component: },
            {path: 'my-profile', component: },
            {path: 'wallet', component: },
            */
            {path: 'user-test', component: UserComponent}

          ]
        }
      ]
    },
    {path: '**', component : ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
