import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { MessageService } from 'primeng/components/common/messageservice';
import * as anime from 'src/assets/anime.min.js';
import { IncidenciaService } from 'src/app/service/incidencia/incidencia.service';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
  providers: [MessageService]
})
export class IncidenciaComponent implements OnInit {

  constructor(private general: GeneralService,private messageService: MessageService, private incidenciaService: IncidenciaService, private loginService: LoginService) { }

  ngOnInit() {
  }

  email(nombre, cuerpo: string, usuario, pass){
    // let email = {
    //   email:{
    //     nombre: nombre,
    //     cuerpo: cuerpo,
    //     usuario: usuario,
    //     pass: pass
    //   }
    // }
    let incidencia: IncidenciaInterface = {
      id: 0,
      vecino: this.loginService.vecino,
      descripcion: cuerpo,
      fecha_creacion: new Date(),
      atendido: 'n'
    }
    this.incidenciaService.add(incidencia).subscribe(
      data => this.showTooltip('success', '', 'Incidencia creada correctamente'),
      error=> this.showTooltip('error', '', 'Error creando la incidencia')
    )
    // this.general.email(email).subscribe(
    //   data => this.showTooltip('success', '', 'Email enviado correctamente'),
    //   error=> this.showTooltip('error', '', 'Error enviando el email')
    // )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
