import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';


declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc;
  constructor() { }

  async init(){
    return new Promise((resolve,reject)=>{
      console.log("Security Initialisation ... ");
      this.kc= new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"my_ecom_realm",
        clientId:"Angular-Ecom-App"
      });
      this.kc.init({
        //onLoad:'login-required'
        onLoad:'check-sso',
        //promiseType:'native'
      }).then((authenticated)=>{
        console.log(authenticated);
        console.log(this.kc.token);
        resolve({auth:authenticated,token:this.kc.token});
      }).catch((err)=> {
        console.log(err);
        reject(err);
        });
      });
  }
  

}
