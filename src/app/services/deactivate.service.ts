// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { LoginComponent } from '../users/login/login.component';
// import { SidebarService } from './sidebar-service';

// @Injectable({
//     providedIn: 'root'
// })

// export class NavigateAwayFromLoginDeactivatorService implements CanDeactivate<LoginComponent> {

//  constructor (public sidebar: SidebarService){}

//   canDeactivate(_target: LoginComponent) {
    
//     this.sidebar.show();
//     return true;
//   }
// }