import { Injectable } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PoblacionProvinciaService{
    constructor(private http: HttpClient, private config: ConfigService){}

    getAllPoblacion(): Observable<PoblacionInterface[]>{
        return this.http.get<PoblacionInterface[]>(`${this.config.api}poblaciones`, this.config.header);
    }
    getAllProvincia(): Observable<ProvinciaInterface[]>{
        return this.http.get<ProvinciaInterface[]>(`${this.config.api}provincias`, this.config.header);
    }
}