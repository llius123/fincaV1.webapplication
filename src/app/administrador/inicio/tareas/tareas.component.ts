import { HeaderAdminComponent } from './../../header-admin/header-admin.component';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { TareaService } from '../../../service/tarea/tarea.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../../../service/login/login.service';
import { GeneralService } from '../../../service/general/general.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [MessageService]
})
export class TareasComponent implements OnInit {

  constructor(private tareaService: TareaService, private messageService: MessageService, private login: LoginService, private general: GeneralService) { }

  tareaedited:string;

  tareas: Array<TareaInterface>;
  datos: boolean = false;
  tarea: TareaInterface;
  tareaEdited: TareaInterface = { id: null, fecha: null, descripcion: null };
  count: number;

  modal_display: boolean = false;
  modal_display_edit: boolean = false;

  ngOnInit() {
    this.cargaTareas();
  }

  ampliacionTexto(data: string){
    this.general.moreTexto.emit({display: true,data: data});
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
      this.datos = true;
    }, 1500);
  }

  showDialog() {
    this.modal_display = true;
  }
  showDialogEdit(tarea: TareaInterface) {
    this.tareaedited = tarea.descripcion.toString();
    this.tareaEdited = tarea;
    this.modal_display_edit = true;
  }

  nuevaTarea(descripcion: string) {
    let fecha = new Date();
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

  editarTarea() {
    const fecha = new Date();
    const tarea = {
      id: this.tareaEdited.id,
      descripcion: this.tareaedited,
      fecha: fecha
    }
    this.tareaService.editTarea(tarea).subscribe(
      response => {
        this.showTooltip('success', '',' Tarea editada correctamente!' );
        this.cargaTareas();
        this.datos = false;
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
        this.datos = false;
      },
      error => {
        this.showTooltip('error', '', 'Error en el servidor!');
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
  // showError() {
  //   this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Ha ocurrido un error!' });
  // }
}
