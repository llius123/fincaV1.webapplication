import { Injectable } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class TipoVecinoService {
    constructor(private http: HttpClient, private config: ConfigService) { }
    
    getAll(): Observable<TipovecinoInterface[]> {
        return this.http.get<TipovecinoInterface[]>(`${this.config.api}tipovecinos`, this.config.header);
    }

    update(data: TipovecinoInterface): Observable<ErrorInterface>{
        return this.http.put<ErrorInterface>(`${this.config.api}tipovecinos`, data, this.config.header);
    }
}