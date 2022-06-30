import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public errorTitle: string;
  public errorDescription: string;

  constructor() {
    this.errorTitle = "Error 404";
    this.errorDescription = "Page not found.";
   }

  ngOnInit(): void {
  }

}
