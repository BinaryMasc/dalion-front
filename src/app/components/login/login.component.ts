import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  disableButton: boolean = false;
  @Output() callCloseModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.callCloseModal.emit();
    //console.log("closing");
  }

  
}
