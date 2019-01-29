import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
@Injectable()
export class FacturaService {
    constructor(private http: HttpClient,private config: ConfigService) { }

    getAll(): Observable<Array<FacturaProveedorInterface>>{
        return this.http.get<Array<FacturaProveedorInterface>>(`${this.config.api}facturaproveedores`, this.config.header);
    }
}