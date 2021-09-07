import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../services/alretify.service';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../users/login/login.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  opened = true;

  over!: 'over';
  constructor( private alertify: AlertifyService,public router: Router,private authService: AuthService) { }

  ngOnInit() {
    
  }
  loggedIn() {
    return localStorage.getItem('token');
  }
}

