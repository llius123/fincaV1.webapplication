import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../service/tarea/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private tareaService: TareaService) { }

  tareas: Array<TareaInterface>;
  datos: boolean = false;

  ngOnInit() {
    this.tareaService.getAllTarea().subscribe(
      (tareas: Array<TareaInterface>) => {
        this.tareas = tareas
        console.log("tareas",this.tareas)
      }
    )
    setTimeout(() => {
      this.datos = true;
  }, 3000);
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
