import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'incidenciaPipe'
})
export class IncidenciaPipePipe implements PipeTransform {

  res: IncidenciaInterface[] = null;
  transform(incidencias: IncidenciaInterface[]) {
    if(!isUndefined(incidencias)){
      return incidencias.filter((incidencia: IncidenciaInterface) => {
        if(incidencia.atendido == 'n') return true;
        return false;
      })
    }
  }
}
