import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';

@Injectable()
export class IncidenciaService{
    
    constructor(private http: HttpClient, private config: ConfigService){}

    getAllIncidencia(): Observable<Array<IncidenciaInterface>>{
        return this.http.get<Array<IncidenciaInterface>>(`${this.config.api}/incidencias`, this.config.header);
    }

    countTarea(): Observable<number>{
        return this.http.get<number>(`${this.config.api}count/IncidenciaBean`, this.config.header);
    }
}