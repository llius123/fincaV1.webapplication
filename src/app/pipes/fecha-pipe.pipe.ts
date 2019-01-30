import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';
import * as moment from 'src/assets/moment-with-locales.js';

@Pipe({
  name: 'fechaPipe'
})
export class FechaPipePipe implements PipeTransform {

  transform(fecha: number) {
    if (!isUndefined(fecha) && !isNull(fecha)) {
        const date = new Date(fecha*1000);
        return moment(fecha).format("DD-MM-YYYY"); 
      }
  }

}
