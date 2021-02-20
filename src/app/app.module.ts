import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from 'src/services/authentification.service';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { RequestInterceptorService } from './services/request-interceptor.service';

const appRoutes:Routes=[
  {path:"index",component:IndexComponent},
  //{path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"customers",component:CustomersComponent},
  {path:"products",component:ProductsComponent},
  {path:"",redirectTo:"index",pathMatch:"full"}
  ];


export function kcFactory(kcSecurity:KeycloakSecurityService){
  return ()=> kcSecurity.init();
}


const secService=new KeycloakSecurityService();


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    CustomersComponent,
    ProductsComponent,
    IndexComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [AuthenticationService, 
    {provide:KeycloakSecurityService,useValue:secService},
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService,multi:true}],
    bootstrap: [AppComponent]
    //entryComponents:[AppComponent]
})
export class AppModule { }

