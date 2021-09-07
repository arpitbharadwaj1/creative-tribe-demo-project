import { Component , NgZone, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-two';
  isLoggedin = false;
  showHead: boolean = false;
  login: boolean = false;
  constructor(public router: Router){}
  // constructor(private router: Router){
  //   router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       if (event['url'] == '/login') {
  //         this.showHead = false;
  //       } else {
  //         this.showHead = true;
  //       }
  //     }
  //   });
  // }
 

  ngOnInit() {

  }

}
