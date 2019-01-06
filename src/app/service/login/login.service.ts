import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private vecino: VecinoInterface;

  constructor(private http: HttpClient, private api: ConfigService) { }

  login(login: string, pass: string): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.api.api}login/${login}/${pass}`);
  }

  setLoggedUser(vecino: VecinoInterface){
    this.vecino = vecino;
  }

  getLoggedUser(){
    return this.vecino;
  }
}
