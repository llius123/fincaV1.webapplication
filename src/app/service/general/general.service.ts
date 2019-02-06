import { Injectable, EventEmitter } from '@angular/core';
import * as moment from 'src/assets/moment-with-locales.js';
@Injectable()
export class GeneralService {
    constructor() {}

    incidenciasEvent = new EventEmitter<any>();
    tareasEvent = new EventEmitter<any>();
    moreTexto = new EventEmitter<any>();

    miliToDate(data){
        const date = new Date(data*1000);
        return moment(data).format("DD-MM-YYYY"); 
    }
}