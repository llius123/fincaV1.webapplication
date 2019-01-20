import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class VecinoService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  nuevoVecino = new EventEmitter<boolean>();

  getAllVecinos(): Observable<VecinoInterface[]>{
    return this.http.get<VecinoInterface[]>(`${this.config.api}vecinos`, this.config.header);
  }



}
