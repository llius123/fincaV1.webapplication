import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ProveedorService {

    constructor(private http: HttpClient, private config: ConfigService) { }

    getAllProveedores(): Observable<ProveedorInterface[]> {
        return this.http.get<ProveedorInterface[]>(`${this.config.api}proveedores`, this.config.header);
    }

    updateProveedor(data: ProveedorInterface): Observable<ErrorInterface> {
        return this.http.put<ErrorInterface>(`${this.config.api}proveedores`, data, this.config.header);
    }

}