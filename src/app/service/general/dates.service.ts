import { Injectable } from '@angular/core';
@Injectable()
export class FechaService {
    constructor() {}

    fromSecodsToDate(data: Date): string{
        const date = new Date(data);
        return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
    }
}