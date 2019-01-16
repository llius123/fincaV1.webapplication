import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';

@Injectable()
export class TareaService{
    constructor(private http: HttpClient, private config: ConfigService){}

    getAllTarea(): Observable<Array<TareaInterface>>{
        return this.http.get<Array<TareaInterface>>(`${this.config.api}tareas`, this.config.header);
    }
}