import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  new: boolean = false;

  constructor(private sql: TipoFacturaService, private messageService: MessageService) { }

  ngOnInit() {
    this.formularioTipoFactura = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl('', [Validators.required])
    })
    this.hijo.subscribe(data => this.putTipoFacturaForm(data));
  }

  putTipoFacturaForm(data: TipofacturaInterface): void{
    this.new = false;
    this.seleccionado = true;
    this.formularioTipoFactura.patchValue({
      id: data.id,
      descripcion: data.descripcion
    })
  }
  edit(): void{
    this.sql.update(this.formularioTipoFactura.value).subscribe(
      data => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadTipoFacturas.emit()
      },
      error => this.showTooltip('error', '',`${error.msg}`)
    )
  }

  newRegistro(): void{
    this.new = true;
    this.seleccionado = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
