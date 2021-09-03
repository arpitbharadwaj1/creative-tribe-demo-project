import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alretify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    ){}

  ngOnInit() {
    // this.onLogin;
  }

  onLogin (loginForm: NgForm){
   console.log(loginForm.value); 
    const token =  this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.email);
      this.alertify.success('Login Successful');
      // this.router.navigate(['/main-section']);
      this.router.navigate(['/welcome'])
    }
    else{
      this.alertify.error('User id or password is wrong');
    }
  }

  onLoginClick() {
    this.onLogin;

  }

}
