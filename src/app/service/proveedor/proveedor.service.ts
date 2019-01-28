import { Injectable, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProveedorService {

    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadProveedores = new EventEmitter<any>();

    getAll(): Observable<ProveedorInterface[]> {
        return this.http.get<ProveedorInterface[]>(`${this.config.api}proveedores`, this.config.header);
    }

    update(data: ProveedorInterface): Observable<ErrorInterface> {
        return this.http.put<ErrorInterface>(`${this.config.api}proveedores`, data, this.config.header);
    }

    create(data: ProveedorInterface){
        return this.http.post<ErrorInterface>(`${this.config.api}proveedores`,data, this.config.header)
    }

    delete(data: ProveedorInterface){
        return this.http.delete<ErrorInterface>(`${this.config.api}proveedores/${data.id}`, this.config.header);
    }

}