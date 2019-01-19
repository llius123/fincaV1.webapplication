import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../service/incidencia/incidencia.service';
import { LoginService } from '../../../service/login/login.service';
import { MessageService } from '../../../../../node_modules/primeng/components/common/messageservice';
import { GeneralService } from '../../../service/general/general.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css'],
  providers: [MessageService]
})
export class IncidenciasComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService, private login: LoginService,private messageService: MessageService, private general: GeneralService) { }

  datos: boolean = false;
  modal_incidencia: boolean = false;
  incidenciaResolver = {id: null, vecino:{nombre: null}, descripcion: null,fecha_creacion: null, atendido: null};

  incidencias: Array<IncidenciaInterface>;
  
  ngOnInit() {
    this.cargaIncidencias()
  }

  cargaIncidencias() {
    this.incidenciasService.getAllIncidencia().subscribe(
      (incidencias: Array<IncidenciaInterface>) => {
        this.incidencias = incidencias;
      }
    )
    this.incidenciasService.countNoAtendido().subscribe(
      (num: ErrorInterface) => {
        this.general.incidenciasEvent.emit(num.msg[1]);
      }
    )
    setTimeout(() => {
      this.datos = true;
    }, 1500);
  }

  showDialog(incidencia: IncidenciaInterface): void {
    this.modal_incidencia = true;
    this.incidenciaResolver = incidencia;
  }

  resolverIncidencia(incidencia: IncidenciaInterface): void{
    incidencia.atendido = "s";
    console.log(incidencia);
    this.incidenciasService.resolveIncidencia(incidencia).subscribe(
      response => {
        this.showTooltip('success', 'Incidencia atendida', `Incidencia del dia: ${incidencia.fecha_creacion} atendida!`);
        this.datos = false;
        this.cargaIncidencias();
        this.modal_incidencia = false;
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', `Error: ${error.msg}`);
        this.cargaIncidencias();
        this.modal_incidencia = false;
      }
    )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
    //this.messageService.add({ severity: 'success', summary: 'Tarea actualizada!', detail: 'Tarea actualizada correctamente' });
  }

}
