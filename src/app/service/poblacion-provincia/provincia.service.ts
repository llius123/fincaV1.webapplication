import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ProvinciaService {
    constructor(private http: HttpClient, private config: ConfigService) {}

    getAll(): Observable<ProvinciaInterface[]>{
        return this.http.get<ProvinciaInterface[]>(`${this.config.api}provincias`, this.config.header);
    }
    
    update(data: ProvinciaInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}provincias`, data, this.config.header);
    }
}