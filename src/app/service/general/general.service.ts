import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class GeneralService {
    constructor() {}

    incidenciasEvent = new EventEmitter<any>();
    tareasEvent = new EventEmitter<any>();
}