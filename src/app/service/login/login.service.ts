import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private api: ConfigService) { }

  login(login: string, pass: string): Observable<VecinoBean> {
    return this.http.get<VecinoBean>(`${this.api.api}vecinos/1`);
    // return this.http.get<VecinoBean>(`${this.api.api}login/${login}/${pass}`);
  }
}
