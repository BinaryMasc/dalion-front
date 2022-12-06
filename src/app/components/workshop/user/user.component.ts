import { Component, Input, OnInit } from '@angular/core';
import { DalionConfigProviderService } from 'src/app/services/dalion-config-provider.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public fullName = '';
  public base64Img = '';
  public profession = '';
  public articles: any[] = [];


  @Input() userId = '';
  @Input() userName = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  if (!this.userName)
    this.userName = this.router.url.split("/user/")[1].split('/')[0];

  else this.router.navigate(['/Error']);


  this.http.get<any>(DalionConfigProviderService.getApiURL("User") + this.userName)
  .subscribe((data) => {

    this.fullName = data.name + " " + data.lastName;
    this.profession = data.profession;

    console.log(data);
  });

  this.http.get<any>(DalionConfigProviderService.getApiWithParams("Workshop?username=") + this.userName)
  .subscribe((services) => {
    this.articles = services;

    console.log(services);
  });









  }

  message(){

  }

}
