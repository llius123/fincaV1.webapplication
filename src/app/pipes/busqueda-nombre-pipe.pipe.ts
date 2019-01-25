import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';

@Pipe({
    name: 'BusquedaNombre'
})
export class BusquedaNombrePipe implements PipeTransform {
    transform(data, myInput,table) {
        if (!data) return [];
        if (!myInput) return data;

        switch (table) {
            case 'vecino':
            return data.filter(vecino => {
                return vecino.nombre.includes(myInput);
            });
            case 'comunidad':
            return data.filter(comunidad => {
                return comunidad.nombre.includes(myInput);
            });
        }

    }

}