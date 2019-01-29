import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class ComunidadService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadComunidades = new EventEmitter<any>();

    getAll(): Observable<ComunidadInterface[]> {
        return this.http.get<ComunidadInterface[]>(`${this.config.api}comunidades`, this.config.header);
    }
    update(comunidad: ComunidadInterface): Observable<ErrorInterface> {
        return this.http.put<ErrorInterface>(`${this.config.api}comunidades`, comunidad, this.config.header);
    }
    create(comunidad: ComunidadInterface) {
        return this.http.post<ErrorInterface>(`${this.config.api}comunidades`, comunidad, this.config.header);
    }
    delete(comunidad: ComunidadInterface) {
        return this.http.delete<ErrorInterface>(`${this.config.api}comunidades/${comunidad.id}`, this.config.header);
    }
}