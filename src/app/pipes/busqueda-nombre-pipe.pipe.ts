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
            case 'provincia':
            return data.filter(provincia => {
                return provincia.descripcion.includes(myInput);
            });
            case 'tipofactura':
            return data.filter(tipofactura => {
                return tipofactura.descripcion.includes(myInput);
            });
            case 'tipovecino':
            return data.filter(tipovecino => {
                return tipovecino.descripcion.includes(myInput);
            });
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