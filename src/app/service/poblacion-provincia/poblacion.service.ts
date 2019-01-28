import { Injectable, EventEmitter } from "@angular/core";
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PoblacionService {
    constructor(private http: HttpClient, private config: ConfigService) { }

    reloadPoblaciones = new EventEmitter();

    getAll(): Observable<PoblacionInterface[]> {
        return this.http.get<PoblacionInterface[]>(`${this.config.api}poblaciones`, this.config.header);
    }

    update(data: PoblacionInterface): Observable<ErrorInterface> {
        return this.http.put<ErrorInterface>(`${this.config.api}poblaciones`, data, this.config.header);
    }

    create(data: PoblacionInterface) {
        return this.http.post<ErrorInterface>(`${this.config.api}poblaciones`, data, this.config.header);
    }

    delete(data: PoblacionInterface) {
        return this.http.delete<ErrorInterface>(`${this.config.api}poblaciones/${data.id}`, this.config.header);
    }
}