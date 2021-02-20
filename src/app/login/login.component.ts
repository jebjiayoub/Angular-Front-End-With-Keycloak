import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode:number=0;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }
  
  onLogin(user) {
    this.authService.login(user).subscribe(
      resp=>{
        //console.log(resp.body['access-token']);
        let jwtToken="Bearer "+resp.body['access-token'];
        this.authService.saveToken(jwtToken);
        this.router.navigateByUrl('/customers');
      },
      err=>{
          this.mode=1;
      })
  }

}
