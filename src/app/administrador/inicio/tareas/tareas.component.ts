import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../service/tarea/tarea.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FechaService } from 'src/app/service/general/dates.service';
import { LoginService } from '../../../service/login/login.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [MessageService]
})
export class TareasComponent implements OnInit {

  constructor(private tareaService: TareaService, private messageService: MessageService, private fechaService: FechaService, private login: LoginService) { }

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

  cargaTareas() {
    this.tareaService.getAllTarea().subscribe(
      (tareas: Array<TareaInterface>) => {
        this.tareas = tareas
      }
    )
    this.tareaService.countTarea().subscribe(
      (num: number)  => {
        this.login.setTareas(num);
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
        this.showSuccess();
        this.cargaTareas();
      },
      (error: ErrorInterface) => {
        this.showError();
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
        this.showSuccess();
        this.cargaTareas();
        this.datos = false;
        this.modal_display_edit = false;
      },
      (error: ErrorInterface) => {
        this.showError();
      }
    )
  }

  deleteTarea(id: number) {
    this.tareaService.deleteTarea(id).subscribe(
      response => {
        this.showSuccess();
        this.cargaTareas();
        this.datos = false;
      },
      error => {
        this.showError();
      }
    )
  }

  formatFecha(date: Date) {
    return this.fechaService.fromSecodsToDate(date);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Tarea actualizada!', detail: 'Tarea actualizada correctamente' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Ha ocurrido un error!' });
  }
}
