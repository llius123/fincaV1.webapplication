import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthUsuario implements CanActivate{
    
    constructor(private login: LoginService){    }

    canActivate(){
        return this.login.isLogged();
    }
}