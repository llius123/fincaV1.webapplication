import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from 'src/app/service/incidencia/incidencia.service';
import { map } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
  providers: [MessageService]
})
export class IncidenciaComponent implements OnInit {

  constructor(private sql: IncidenciaService, private messageService: MessageService) { }

  incidencias: IncidenciaInterface[];
  incidenciaView: IncidenciaInterface;
  display_factura: boolean = false;
  display_eliminar: boolean = false;
  datos: boolean = false;
  eliminar: IncidenciaInterface;
  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.sql.getAllIncidencia().pipe(
      map(x => {
        this.incidencias = x;
        console.log(this.incidencias)
      })
    ).subscribe()
  }

  action(accion: string, incidencia: IncidenciaInterface) {
    switch (accion) {
      case 'ver':
        this.incidenciaView = incidencia;
        this.display_factura = true;
        this.datos = true;
        break;
      case 'atender':
        incidencia.atendido = 's';
        this.sql.resolveIncidencia(incidencia).subscribe(
          data => {
            this.getAll();
            this.showTooltip('success', '', 'Incidencia resuelta con exito!')
          },
          error => { this.showTooltip('error', '', `${error.msg}`) }
        )
        break;
      case 'eliminar':
        this.display_eliminar = true;
        this.eliminar = incidencia
        break;
    }
  }

  confirm() {
    this.sql.delete(this.eliminar.id).subscribe(
      (data: any) => {
        this.getAll();
        this.showTooltip('success', '', `${data.msg}`)
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }
  cerrar(){
    this.display_factura = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
