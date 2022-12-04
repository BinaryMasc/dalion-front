import { Injectable } from '@angular/core';
//import * as jsonData from "../../assets/config.json"

@Injectable({
  providedIn: 'root'
})
export class DalionConfigProviderService {

  //static dataConfig: jsonData;

  constructor() {   }

   public static getApiURL(controller: string = ''):string{
    return "https://localhost:7057/api/" + controller + (controller ? "/" : "");
   }

   public static getApiWithParams(controllerAndParams: string = ''):string{
    return "https://localhost:7057/api/" + controllerAndParams;
   }
}
