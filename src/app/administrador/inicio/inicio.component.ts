import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { IncidenciaService } from '../../service/incidencia/incidencia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private incidenciasService: IncidenciaService) { }

  incidencias:Array<IncidenciaInterface>;

  ngOnInit() {
    this.incidenciasService.getAllIncidencia().subscribe(
      (incidencias:Array<IncidenciaInterface>) => {
        this.incidencias = incidencias;
        console.log("incidencia",this.incidencias)
      }
    )
  }

}
