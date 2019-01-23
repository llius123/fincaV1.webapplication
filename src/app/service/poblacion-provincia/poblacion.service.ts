import { Injectable } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PoblacionService{
    constructor(private http: HttpClient, private config: ConfigService){}

    getAllPoblacion(): Observable<PoblacionInterface[]>{
        return this.http.get<PoblacionInterface[]>(`${this.config.api}poblaciones`, this.config.header);
    }
    
    updatePoblacion(data: PoblacionInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}poblaciones`, data, this.config.header);
    }
}