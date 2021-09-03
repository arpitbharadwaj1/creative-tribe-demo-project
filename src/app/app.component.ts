import { Component , OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-two';
  isLoggedin = false;

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.isLoggedin = true;
    }
  }
  
  loggedIn(){
    // return localStorage.getItem('token');
    if(localStorage.getItem('token')) {
      this.isLoggedin = true;
    }
  }

}
