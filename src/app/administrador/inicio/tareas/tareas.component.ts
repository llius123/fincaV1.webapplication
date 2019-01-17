import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../service/tarea/tarea.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [MessageService]
})
export class TareasComponent implements OnInit {

  constructor(private tareaService: TareaService, private messageService: MessageService) { }

  tareas: Array<TareaInterface>;
  datos: boolean = false;
  modal_display: boolean = false;
  tarea: TareaInterface;

  ngOnInit() {
    this.cargaTareas();
  }

  cargaTareas() {
    this.tareaService.getAllTarea().subscribe(
      (tareas: Array<TareaInterface>) => {
        this.tareas = tareas
        console.log("tareas", this.tareas)
      }
    )
    setTimeout(() => {
      this.datos = true;
    }, 3000);
  }

  showDialog() {
    this.modal_display = true;
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
      },
      (error: ErrorInterface) => {
        this.showError();
      }
    )
    this.modal_display = false;
  }

  deleteTarea(id: number){
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

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Tarea creada!', detail: 'Tarea creada correctamente' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error!', detail: 'Ha ocurrido un error!' });
  }
}
