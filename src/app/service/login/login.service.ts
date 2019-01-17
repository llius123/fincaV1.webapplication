import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private configAPI: ConfigService) { }
  
  vecino: VecinoInterface;
  countTareas: number;
  countIncidencias: number;

  login(login: string, pass: string): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.configAPI.api}login/${login}/${pass}`, this.configAPI.header);
  }

  check(): Observable<VecinoInterface> {
    return this.http.get<VecinoInterface>(`${this.configAPI.api}check`, this.configAPI.header);
  }

  setvecino(vecino: VecinoInterface){
    console.log(vecino)
    this.vecino = vecino;
  }

  setTareas(num: number){
    this.countTareas = num;
  }

  setIncidencias(num: number){
    this.countIncidencias = num;
  }


}
