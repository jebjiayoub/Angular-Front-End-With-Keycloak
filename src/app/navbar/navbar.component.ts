import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public securityService:KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.securityService.kc.logout();
  }

  onLogin(){
    this.securityService.kc.login();
  }

  onMyAccount(){
    this.securityService.kc.accountManagement();
  }

  isAppAdmin(){
    return this.securityService.kc.hasRealmRole('ADMIN');
  }

}
