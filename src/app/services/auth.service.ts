import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService{    
    constructor( private router: Router){}
   
    authUser(user: any){
        let userArray= [];
        if(localStorage.getItem('Users')){
            userArray = JSON.parse(localStorage.getItem('Users') || '{}');
        }
        return userArray.find(  (p: { email: any; password: any; }) => 
                p.email === user.email && 
                p.password === user.password
        )
    }
    login(user: User) {
        if (user.email !== '' && user.password !== '' ) {
          this.router.navigate(['/']);
        }
      }
    
      logout() {
        this.router.navigate(['/login']);
      }
}