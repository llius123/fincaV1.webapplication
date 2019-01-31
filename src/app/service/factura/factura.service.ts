import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
@Injectable()
export class FacturaService {
    constructor(private http: HttpClient,private config: ConfigService) { }

    formatoFechaDatePicker: any = {
        firstDayOfWeek: 1,
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar',
        dateFormat: 'dd/mm/yy'
    };

    getAll(): Observable<Array<FacturaProveedorInterface>>{
        return this.http.get<Array<FacturaProveedorInterface>>(`${this.config.api}facturaproveedores`, this.config.header);
    }

    create(data: FacturaProveedorInterface): Observable<ErrorInterface>{
        return this.http.post<ErrorInterface>(`${this.config.api}facturaproveedores`,data, this.config.header);
    }

    getById(id: number): Observable<FacturaProveedorInterface>{
        return this.http.get<FacturaProveedorInterface>(`${this.config.api}facturaproveedores/${id}`, this.config.header);
    }
}