import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "../../../../node_modules/@angular/core";
import { ConfigService } from '../config/config.service';

@Injectable()
export class TareaService{
    constructor(private http: HttpClient, private config: ConfigService){}

    tareasNum: number;

    getAllTarea(): Observable<Array<TareaInterface>>{
        return this.http.get<Array<TareaInterface>>(`${this.config.api}tareas`, this.config.header);
    }

    addTarea(tarea: TareaInterface) {
        return this.http.post(`${this.config.api}tareas`, tarea, this.config.header);
    }

    deleteTarea(id: number) {
        return this.http.delete(`${this.config.api}tareas/${id}`, this.config.header);
    }

    editTarea(tarea: TareaInterface) {
        return this.http.put(`${this.config.api}tareas`, tarea, this.config.header);
    }

    countTarea(): Observable<number>{
        return this.http.get<number>(`${this.config.api}count/TareaBean`, this.config.header);
    }

    setCountTareas(numTareas: number){
        this.tareasNum = numTareas;
    }
}