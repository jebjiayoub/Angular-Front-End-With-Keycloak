import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient,
              private securityService:KeycloakSecurityService ) { }

  public getCustomers(){
    //return this.http.get("http://localhost:8081/customers",
    //{headers: new  HttpHeaders({Authorization:'Bearer '+this.securityService.kc.token})});
    return this.http.get("http://localhost:8081/customers");
  }

}
