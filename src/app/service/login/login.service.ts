import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private vecino: VecinoInterface;

  constructor(private http: HttpClient, private configAPI: ConfigService) { }
  
  login(login: string, pass: string): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.configAPI.api}login/${login}/${pass}`, this.configAPI.header);
  }

  check(): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.configAPI.api}check`, this.configAPI.header);
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
