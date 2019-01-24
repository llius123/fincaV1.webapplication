import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-tipofactura',
  templateUrl: './edit-tipofactura.component.html',
  styleUrls: ['./edit-tipofactura.component.css'],
  providers: [MessageService]
})
export class EditTipofacturaComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<TipofacturaInterface>;
  formularioTipoFactura: FormGroup;

  constructor(private sql: TipoFacturaService, private messageService: MessageService) { }

  ngOnInit() {
    this.formularioTipoFactura = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    })
    this.hijo.subscribe(data => this.putTipoFacturaForm(data));
  }

  putTipoFacturaForm(data: TipofacturaInterface): void{
    this.formularioTipoFactura.patchValue({
      id: data.id,
      descripcion: data.descripcion
    })
  }
  edit(): void{
    this.sql.update(this.formularioTipoFactura.value).subscribe(
      data => this.showTooltip('success', '', `${data.msg}`),
      error => this.showTooltip('error', '',`${error.msg}`)
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
