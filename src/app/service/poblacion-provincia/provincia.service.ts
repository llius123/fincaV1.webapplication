import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ProvinciaService {
    constructor(private http: HttpClient, private config: ConfigService) {}

    reloadProvincias = new EventEmitter<any>();

    getAll(): Observable<ProvinciaInterface[]>{
        return this.http.get<ProvinciaInterface[]>(`${this.config.api}provincias`, this.config.header);
    }
    
    update(data: ProvinciaInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}provincias`, data, this.config.header);
    }

    delete(data: ProvinciaInterface){
        return this.http.delete<ErrorInterface>(`${this.config.api}provincias/${data.id}`, this.config.header)
    }

    create(data: ProvinciaInterface){
        return this.http.post<ErrorInterface>(`${this.config.api}provincias`, data, this.config.header);
    }
}