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

    getAll2(): Observable<Array<FacturaProveedorInterface>> {
        return this.http.get<Array<FacturaProveedorInterface>>(`${this.config.api}facturaproveedoresusuario`, this.config.header);
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
    filtroFecha2(desde: string, hasta: string): Observable<FacturaProveedorInterface[]> {
        return this.http.get<FacturaProveedorInterface[]>(`${this.config.api}facturaproveedoresusuario/filtrofecha/${desde}/${hasta}`, this.config.header);
    }
    
    filtroGeneral(tabla: string, dato: number): Observable<FacturaProveedorInterface[]> {
        return this.http.get<FacturaProveedorInterface[]>(`${this.config.api}facturaproveedores/filtrogeneral/${tabla}/${dato}`, this.config.header);
    }
    filtroGeneral2(tabla: string, dato: number): Observable<FacturaProveedorInterface[]> {
        return this.http.get<FacturaProveedorInterface[]>(`${this.config.api}facturaproveedoresusuario/filtrogeneral/${tabla}/${dato}`, this.config.header);
    }
    graficoCobrado(): Observable<any> {
        return this.http.get<any>(`${this.config.api}facturaproveedores/facturagraficocobrado`, this.config.header);
    }
    graficoTipoFactura() {
        return this.http.get(`${this.config.api}facturaproveedores/facturagraficotipofactura`, this.config.header);
    }
}