import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';

@Pipe({
    name: 'BusquedaNombre'
})
export class BusquedaNombrePipe implements PipeTransform {
    transform(data, myInput) {
        if (!data) return [];
        if (!myInput) return data;

        return data.filter(vecino => {
            return vecino.nombre.includes(myInput);
        });
    }

}