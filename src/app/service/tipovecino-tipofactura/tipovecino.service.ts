import { Injectable, EventEmitter } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, config } from 'rxjs';

@Injectable()

export class TipoVecinoService {
    constructor(private http: HttpClient, private config: ConfigService) { }
    
    reloadTipoVecinos = new EventEmitter<any>();

    getAll(): Observable<TipovecinoInterface[]> {
        return this.http.get<TipovecinoInterface[]>(`${this.config.api}tipovecinos`, this.config.header);
    }

    update(data: TipovecinoInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}tipovecinos`, data, this.config.header);
    }

    create(data: TipovecinoInterface): Observable<ErrorInterface>{
        return this.http.post<ErrorInterface>(`${this.config.api}tipovecinos`, data, this.config.header);
    }

    delete(data: TipovecinoInterface){
        return this.http.delete<ErrorInterface>(`${this.config.api}tipovecinos/${data.id}`, this.config.header);
    }
}