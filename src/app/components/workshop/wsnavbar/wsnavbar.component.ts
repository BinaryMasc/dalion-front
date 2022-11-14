import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wsnavbar',
  templateUrl: './wsnavbar.component.html',
  styleUrls: ['./wsnavbar.component.css']
})
export class WsnavbarComponent implements OnInit {

  @Output() changeWsPage = new EventEmitter;
  @Input() public resource = "";
  constructor() { }

  ngOnInit(): void {
  }

  onNavbarClick(res: string){
  }
}
