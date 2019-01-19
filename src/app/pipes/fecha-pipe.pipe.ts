import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';

@Pipe({
  name: 'fechaPipe'
})
export class FechaPipePipe implements PipeTransform {

  transform(fecha: number) {
    if (!isUndefined(fecha) && !isNull(fecha)) {
        const date = new Date(fecha);
        return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
      }
  }

}
