import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isNull } from 'util';

@Pipe({
  name: 'incidenciaPipe'
})
export class IncidenciaPipePipe implements PipeTransform {

  res: IncidenciaInterface[] = null;
  transform(incidencias: IncidenciaInterface[]) {
    if(!isUndefined(incidencias) && !isNull(incidencias)){
      return incidencias.filter((incidencia: IncidenciaInterface) => {
        if(incidencia.atendido == 'n') return true;
      })
    }
  }
}
