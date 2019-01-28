import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-new-tipofactura',
  templateUrl: './new-tipofactura.component.html',
  styleUrls: ['./new-tipofactura.component.css'],
  providers: [MessageService]
})
export class NewTipofacturaComponent implements OnInit {

  constructor(private sql: TipoFacturaService, private messageService: MessageService) { }

  formularioTipoFactura: FormGroup;

  ngOnInit() {
    this.formularioTipoFactura = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    })
  }

  newTipoFactura() {
    this.sql.create(this.formularioTipoFactura.value).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadTipoFacturas.emit();
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
