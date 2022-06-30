import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshopmain',
  templateUrl: './workshopmain.component.html',
  styleUrls: ['./workshopmain.component.css']
})
export class WorkshopmainComponent implements OnInit {

  public resource: string;
  constructor(private router: Router ) {
    this.resource = 'explore';
  }

  ngOnInit(): void {
    if(this.router.url === '/workshop') this.resource = 'explore';
    else if(this.router.url === '/workshop/my-services') this.resource = 'my-services';
    else if(this.router.url === '/workshop/my-profile') this.resource = 'my-profile';
    else if(this.router.url === '/workshop/wallet') this.resource = 'wallet';

  }

  changeUrlResource(res: string){
    this.resource = res;
  }

}
