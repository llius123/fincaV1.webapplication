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

  updateVecino(vecino: VecinoInterface): Observable<ErrorInterface> {
    return this.http.put<ErrorInterface>(`${this.config.api}vecinos`, vecino, this.config.header);
  }

  newVecino(vecino: VecinoInterface){
    return this.http.post(`${this.config.api}vecinos`, vecino, this.config.header);
  }

  deleteVecino(id: number){
    return this.http.delete(`${this.config.api}vecinos/${id}`, this.config.header);
  }



}
