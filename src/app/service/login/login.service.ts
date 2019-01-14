import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private vecino: VecinoInterface;

  constructor(private http: HttpClient, private api: ConfigService) { }

  login(login: string, pass: string): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.api.api}login/${login}/${pass}`);
  }

  check(): Observable<VecinoInterface> {
    //return this.http.get<VecinoInterface>(`http://www.mocky.io/v2/5c3c77fb3100006300a1a3e4`);
    return this.http.get<VecinoInterface>(`${this.api.api}check`);
  }

  setLoggedUser(vecino: VecinoInterface){
    this.vecino = vecino;
  }

  getLoggedUser(): VecinoBean{
    return this.vecino;
  }

  isLogged(): boolean{
    console.log(this.vecino);
    if(isUndefined(this.vecino) ){
      return true;
    }else{
      return false;
    }
  }
}
