import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient,
              private securityService:KeycloakSecurityService ) { }

  public getProducts(){
    //return this.http.get("http://localhost:8082/products",
    //{headers: new  HttpHeaders({Authorization:'Bearer '+this.securityService.kc.token})});
    return this.http.get("http://localhost:8082/products");
  }

}
