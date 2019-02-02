import { Observable, config } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
@Injectable()
export class FacturaService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    getAll(): Observable<Array<FacturaProveedorInterface>> {
        return this.http.get<Array<FacturaProveedorInterface>>(`${this.config.api}facturaproveedores`, this.config.header);
    }

    create(data: FacturaProveedorInterface): Observable<ErrorInterface> {
        return this.http.post<ErrorInterface>(`${this.config.api}facturaproveedores`, data, this.config.header);
    }

    update(data: FacturaProveedorInterface) {
        return this.http.put<ErrorInterface>(`${this.config.api}facturaproveedores`, data, this.config.header);
    }

    getById(id: number): Observable<FacturaProveedorInterface> {
        return this.http.get<FacturaProveedorInterface>(`${this.config.api}facturaproveedores/${id}`, this.config.header);
    }

    filtroFecha(desde: string, hasta: string): Observable<FacturaProveedorInterface[]> {
        return this.http.get<FacturaProveedorInterface[]>(`${this.config.api}facturaproveedores/filtrofecha/${desde}/${hasta}`, this.config.header);
    }
    filtroGeneral(tabla: string, dato: number): Observable<FacturaProveedorInterface[]> {
        return this.http.get<FacturaProveedorInterface[]>(`${this.config.api}facturaproveedores/filtrogeneral/${tabla}/${dato}`, this.config.header);
    }
}