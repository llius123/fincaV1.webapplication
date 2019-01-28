import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VecinoService } from 'src/app/service/vecino/vecino.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';

@Component({
  selector: 'app-new-tipovecino',
  templateUrl: './new-tipovecino.component.html',
  styleUrls: ['./new-tipovecino.component.css'],
  providers: [MessageService]
})
export class NewTipovecinoComponent implements OnInit {

  constructor(private sql: TipoVecinoService, private messageService: MessageService) { }

  formularioTipoVecino: FormGroup;

  ngOnInit() {
    this.formularioTipoVecino = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    })
  }

  newTipoVecino() {
    this.sql.create(this.formularioTipoVecino.value).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadTipoVecinos.emit();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
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
