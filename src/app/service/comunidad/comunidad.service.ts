import { HttpClient } from '@angular/common/http';
import { Injectable } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class ComunidadService{
    constructor(private http: HttpClient, private config: ConfigService){}

    getAll(): Observable<ComunidadInterface[]>{
        return this.http.get<ComunidadInterface[]>(`${this.config.api}comunidades`, this.config.header);
    }
    save(comunidad: ComunidadInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}comunidades`, comunidad, this.config.header);
    }
}