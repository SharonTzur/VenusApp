import { Injectable } from '@angular/core';
import { CanActivate, Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private authService: AuthService, private router:Router) {}

    canActivate() {
        let isUserLogged =  this.authService.isLoggedIn();

        if(isUserLogged){
            return true;
        }
        else{
            this.router.navigate(['account/login']);
            return false;
        }
    }
}
