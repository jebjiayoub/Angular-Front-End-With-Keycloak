import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {

    private host:string="http://localhost:8080";
    
    constructor(private http:HttpClient){
    
    }
    
    login(user){
        let  payload=new  HttpParams().set("username",user.username).set("password",user.password);
        return this.http.post(this.host+"/login", payload, {observe: 'response'})
    }

    saveToken(jwt:string){
        localStorage.setItem('jwt',jwt);
    }
}