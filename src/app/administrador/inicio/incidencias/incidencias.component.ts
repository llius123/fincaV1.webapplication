import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../service/incidencia/incidencia.service';
import { LoginService } from '../../../service/login/login.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService, private login: LoginService) { }

  datos: boolean = false;

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
    setTimeout(() => {
      this.datos = true;
    }, 1500);
  }

}
