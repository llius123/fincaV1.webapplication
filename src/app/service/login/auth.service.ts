import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { LoginService } from './login.service';

import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable({ providedIn: "root" })
export class AuthAdmin implements CanLoad, CanActivate {

    constructor(private login: LoginService, private router: Router) { }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log("AuthGuard->CanLoad:", route, this.isAdmin());
        return this.isAdmin();
    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        console.log("AuthGuard->CanActivate:", state, this.isAdmin());
        return this.isAdmin();
    }

    isAdmin() {
        if (!isUndefined(this.login.vecino) && this.login.vecino.id_tipovecino.id === 1) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}