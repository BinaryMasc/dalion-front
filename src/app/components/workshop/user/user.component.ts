import { Component, Input, OnInit } from '@angular/core';
import { DalionConfigProviderService } from 'src/app/services/dalion-config-provider.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  private fullName = '';
  private base64Img = '';
  private profession = '';
  private articles: string[] = [];


  @Input() userId = '';
  @Input() userName = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //console.log(DalionConfigProviderService.getApiURL());
    let suscription =
    this.http.get(DalionConfigProviderService.getApiURL("User") + this.userId)
      .subscribe((data) => {
        //console.log(data);
      })
      .unsubscribe();

  }

}
