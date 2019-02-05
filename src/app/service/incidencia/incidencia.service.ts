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

    countIncidencia(): Observable<number>{
        return this.http.get<number>(`${this.config.api}count/IncidenciaBean`, this.config.header);
    }

    resolveIncidencia(incidencia: IncidenciaInterface) {
        return this.http.put(`${this.config.api}incidencias`, incidencia, this.config.header);
    }

    countNoAtendido(){
        return this.http.get(`${this.config.api}incidenciascount`, this.config.header);
    }

    delete(id: number){
        return this.http.delete(`${this.config.api}incidencias/${id}`, this.config.header);
    }
}