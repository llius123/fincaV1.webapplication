import { Injectable, EventEmitter } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, config } from 'rxjs';

@Injectable()
export class TipoFacturaService{
    constructor(private http: HttpClient, private config: ConfigService) { }
    
    reloadTipoFacturas = new EventEmitter<any>();

    getAll(): Observable<TipofacturaInterface[]> {
        return this.http.get<TipofacturaInterface[]>(`${this.config.api}tipofacturas`, this.config.header);
    }

    update(data: TipofacturaInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}tipofacturas`, data, this.config.header);
    }

    delete(data: TipofacturaInterface){
        return this.http.delete<ErrorInterface>(`${this.config.api}tipofacturas/${data.id}`, this.config.header);
    }

    create(data: TipofacturaInterface){
        return this.http.post<ErrorInterface>(`${this.config.api}tipofacturas`, data, this.config.header);
    }

}