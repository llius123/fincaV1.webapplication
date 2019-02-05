import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { GeneralService } from '../../service/general/general.service';
import { IncidenciaService } from 'src/app/service/incidencia/incidencia.service';
import { TareaService } from 'src/app/service/tarea/tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  providers: [MessageService]
})
export class HeaderAdminComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService, private login: LoginService,private messageService: MessageService, private general: GeneralService,private tareaService: TareaService, private router: Router) { 
    general.tareasEvent.subscribe(
      (data:number) =>{
        this.countTareas = data;
      }
    )
    general.incidenciasEvent.subscribe(
      (data:number) => {
        this.countIncidencias = data;
      }
    )
  }

  vecino_nombre:  string;
  countIncidencias: number;
  countTareas: number;

  datos1: boolean = false;
  modal_incidencia: boolean = false;
  incidenciaResolver = {id: null, vecino:{nombre: null}, descripcion: null,fecha_creacion: null, atendido: null};

  incidencias: Array<IncidenciaInterface>;

  tareas: Array<TareaInterface>;
  datos2: boolean = false;
  tarea: TareaInterface;
  tareaEdited: TareaInterface = { id: null, fecha: null, descripcion: null };
  count: number;

  modal_display: boolean = false;
  modal_display_edit: boolean = false;
  
  ngOnInit() {
    this.cargaIncidencias()
    this.cargaTareas();
  }

  cargaIncidencias() {
    this.incidenciasService.getAllIncidencia().subscribe(
      (incidencias: Array<IncidenciaInterface>) => {
        this.incidencias = incidencias;
      }
    )
    this.incidenciasService.countNoAtendido().subscribe(
      (num: ErrorInterface) => {
        this.general.incidenciasEvent.emit(num.msg);
      }
    )
    setTimeout(() => {
      this.datos1 = true;
    }, 1500);
  }

  showDialog1(incidencia: IncidenciaInterface): void {
    this.modal_incidencia = true;
    this.incidenciaResolver = incidencia;
  }

  resolverIncidencia(incidencia: IncidenciaInterface): void{
    incidencia.atendido = "s";
    console.log(incidencia);
    this.incidenciasService.resolveIncidencia(incidencia).subscribe(
      response => {
        this.showTooltip('success', 'Incidencia atendida', `Incidencia del dia: ${incidencia.fecha_creacion} atendida!`);
        this.datos1 = false;
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


  cargaTareas() {
    this.tareaService.getAllTarea().subscribe(
      (tareas: Array<TareaInterface>) => {
        this.tareas = tareas
      }
    )
    this.tareaService.countTarea().subscribe(
      (num: number) => {
        this.general.tareasEvent.emit(num);
      }
    )
    setTimeout(() => {
      this.datos2 = true;
    }, 1500);
  }

  showDialog2() {
    this.modal_display = true;
  }
  showDialogEdit(tarea: TareaInterface) {
    this.modal_display_edit = true;
    this.tareaEdited = tarea;
  }

  nuevaTarea(descripcion: string) {
    const fecha = new Date();
    this.tarea = {
      id: null,
      fecha: fecha,
      descripcion: descripcion
    }
    this.tareaService.addTarea(this.tarea).subscribe(
      (response) => {
        this.showTooltip('success', '',' Tarea creada correctamente!' );
        this.cargaTareas();
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', 'Error en el servidor al añadir la tarea!');
      }
    )
    this.modal_display = false;
  }

  editarTarea(descripcion: string) {
    const fecha = new Date();
    const tarea = {
      id: this.tareaEdited.id,
      descripcion: descripcion,
      fecha: fecha
    }
    this.tareaService.editTarea(tarea).subscribe(
      response => {
        this.showTooltip('success', '',' Tarea editada correctamente!' );
        this.cargaTareas();
        this.datos2 = false;
        this.modal_display_edit = false;
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', 'Error en el servidor!');
      }
    )
  }

  deleteTarea(id: number) {
    this.tareaService.deleteTarea(id).subscribe(
      response => {
        this.showTooltip('success', '',' Tarea eliminada correctamente!' );
        this.cargaTareas();
        this.datos2 = false;
      },
      error => {
        this.showTooltip('error', '', 'Error en el servidor!');
      }
    )
  }

  logout(){
    this.login.logout();
    this.router.navigate(['login'])
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
