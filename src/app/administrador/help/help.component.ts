import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general/general.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers: [MessageService]
})
export class HelpComponent implements OnInit {

  constructor(private router: Router, private general: GeneralService, private messageService: MessageService) { }

  ngOnInit() {
  }

  email(nombre, cuerpo, usuario, pass){
    let email = {
      email:{
        nombre: nombre,
        cuerpo: cuerpo,
        usuario: usuario,
        pass: pass
      }
    }
    this.general.email(email).subscribe(
      data => this.showTooltip('success', '', 'Email enviado correctamente'),
      error=> this.showTooltip('error', '', 'Error enviando el email')
    )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
