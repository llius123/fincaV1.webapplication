import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { IncidenciaService } from '../../service/incidencia/incidencia.service';
import { TareaService } from '../../service/tarea/tarea.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService, private tareaService: TareaService) { }

  incidencias:Array<IncidenciaInterface>;
  tareas: Array<TareaInterface>;

  ngOnInit() {
  }

}
