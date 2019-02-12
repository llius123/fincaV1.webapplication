import { CanLoad, CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { LoginService } from './login.service';

import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable({ providedIn: "root" })
export class AuthAdmin implements CanLoad, CanActivate {

    constructor(private login: LoginService, private router: Router) { }


    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const id = route.data.id;
        console.log("AuthGuard->CanLoad:", route, this.isAdmin(id), `Permiso requerido para entrar: ${id}`);
        return this.isAdmin(id);
    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        const id = next.data.id;
        console.log("AuthGuard->CanActivate:", state, this.isAdmin(id), `Permiso requerido para entrar: ${id}`);
        if(id === 1){
            return this.isAdmin(id);
        }else if(id === 2){
            return this.isVecino(id);
        }
    }

    isAdmin(data: number) {
        if (!isUndefined(this.login.vecino) && this.login.vecino.id_tipovecino.id === data) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }

    isVecino(data: number){
        if (!isUndefined(this.login.vecino) && this.login.vecino.id_tipovecino.id === data) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}