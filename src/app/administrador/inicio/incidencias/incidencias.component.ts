import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../service/incidencia/incidencia.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService) { }

  datos: boolean = false;

  incidencias:Array<IncidenciaInterface>;

  ngOnInit() {
    this.incidenciasService.getAllIncidencia().subscribe(
      (incidencias:Array<IncidenciaInterface>) => {
        this.incidencias = incidencias;
      }
    )
    setTimeout(() => {
      this.datos = true;
  }, 3000);
  }

}
