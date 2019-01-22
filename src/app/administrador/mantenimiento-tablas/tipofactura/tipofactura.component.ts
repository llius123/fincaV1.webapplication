import { Component, OnInit } from '@angular/core';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tipofactura',
  templateUrl: './tipofactura.component.html',
  styleUrls: ['./tipofactura.component.css'],
  providers: [MessageService]
})
export class TipofacturaComponent implements OnInit {

  constructor(private tipoFacturaService: TipoFacturaService, private tipoVecinoService: TipoVecinoService, private messageService: MessageService) { }

  tipovecinos: TipovecinoInterface[];
  tipofacturas: TipofacturaInterface[];

  formularioTipoVecino: FormGroup;
  formularioTipoFactura: FormGroup;

  display_tipo: boolean = false;

  formularioTipo: FormGroup;

  ngOnInit() {
    this.getAll()
    this.formularioTipo = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    }
    )
  }

  getAll(): void {

    this.tipoFacturaService.getAll().subscribe(
      data => this.tipofacturas = data
    )
    this.tipoVecinoService.getAll().subscribe(
      data => this.tipovecinos = data
    )
  }

  tipovecino: boolean = false;
  tipofactura: boolean = false;
  showDialog(data: any, tipo: string) {
    switch (tipo) {
      case 'tipovecino':
        this.tipovecino = true;
        this.tipofactura = false;
        break;
      case 'tipofactura':
        this.tipovecino = false;
        this.tipofactura = true;
        break;
    }
    this.display_tipo = true;
    this.formularioTipo.patchValue({
      id: data.id,
      descripcion: data.descripcion
    })
  }
  closeModals(): void {
    this.display_tipo = false;
  }

  editTipo(tipo: string) {
    switch (tipo) {
      case 'tipovecino':
        this.tipoVecinoService.update(this.formularioTipo.value).subscribe(
          data => this.showTooltip('success', '', `${data.msg}`),
          error => this.showTooltip('error', '', `${error.msg}`),
        )
        break;

      case 'tipofactura':
        this.tipoFacturaService.update(this.formularioTipo.value).subscribe(
          data => this.showTooltip('success', '', `${data.msg}`),
          error => this.showTooltip('error', '', `${error.msg}`),
        )
        break;
    }
    this.display_tipo = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
