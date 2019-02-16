import { Injectable, EventEmitter } from '@angular/core';
import * as moment from 'src/assets/moment-with-locales.js';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralService {
    constructor(private http: HttpClient) { }

    incidenciasEvent = new EventEmitter<any>();
    tareasEvent = new EventEmitter<any>();
    moreTexto = new EventEmitter<any>();

    miliToDate(data) {
        const date = new Date(data * 1000);
        return moment(data).format("DD-MM-YYYY");
    }

    email(email) {
        return this.http.post('http://localhost:4201/email', email);
    }
}