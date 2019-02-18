
import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../service/tarea/tarea.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginService } from '../../../service/login/login.service';
import { GeneralService } from '../../../service/general/general.service';
import * as anime from 'src/assets/anime.min.js';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [MessageService]
})
export class TareasComponent implements OnInit {

  constructor(private tareaService: TareaService, private messageService: MessageService, private login: LoginService, private general: GeneralService) { }

  tareaedited: string;

  tareas: Array<TareaInterface>;
  datos: boolean = false;
  tarea: TareaInterface;
  tareaEdited: TareaInterface = { id: null, fecha: null, descripcion: null };
  count: number;

  modal_display: boolean = false;
  modal_display_edit: boolean = false;

  vecinoSession: VecinoInterface;

  ngOnInit() {
    this.cargaTareas();
      anime.timeline({
        targets: '.spinner1',
        duration: 1500,
        easing: 'easeInOutSine',
      }).add({
        translateY: +200,
        keyframes: [
          { opacity: 1 },
          { opacity: 0, height:'0px' }
        ]
      }).add({translateY: -200}).finished.then(() => { this.datos = true });
  }

  ampliacionTexto(data: string) {
    this.general.moreTexto.emit({ display: true, data: data });
  }

  cargaTareas() {
    this.vecinoSession = this.login.vecino;
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
        this.showTooltip('success', '', ' Tarea creada correctamente!');
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
        this.showTooltip('success', '', ' Tarea editada correctamente!');
        this.cargaTareas();
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
        this.showTooltip('success', '', ' Tarea eliminada correctamente!');
        this.cargaTareas();
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
