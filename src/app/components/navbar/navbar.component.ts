import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lang : string;
  @Output() callLoginModal = new EventEmitter();

  constructor() {
    this.lang = localStorage.getItem('language') ?? "EN";
  }

  ngOnInit() {

  }

  onLanguageChange(val: any){
    localStorage.setItem('language', val.value);
    this.lang = val.value;

    window.location.reload();
  }


 onLoginClick(){
  this.callLoginModal.emit();
  }
}
