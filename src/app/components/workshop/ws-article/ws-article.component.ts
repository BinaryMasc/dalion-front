import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws-article',
  templateUrl: './ws-article.component.html',
  styleUrls: ['./ws-article.component.css']
})
export class WsArticleComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() price = '';
  @Input() user = '';
  @Input() categories = '';
  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
