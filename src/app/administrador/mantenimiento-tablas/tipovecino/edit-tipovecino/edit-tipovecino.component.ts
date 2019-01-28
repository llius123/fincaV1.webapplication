import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-tipovecino',
  templateUrl: './edit-tipovecino.component.html',
  styleUrls: ['./edit-tipovecino.component.css'],
  providers: [MessageService]
})
export class EditTipovecinoComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<TipovecinoInterface>;
  formularioTipoVecino: FormGroup;

  new: boolean = false;

  constructor(private sql: TipoVecinoService, private messageService: MessageService) { }

  ngOnInit() {
    this.formularioTipoVecino = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    })
    this.hijo.subscribe(data => this.putTipoVecinoForm(data));
  }

  newRegistro(): void{
    this.new = true;
    this.seleccionado = false;
  }

  putTipoVecinoForm(data: TipovecinoInterface): void{
    this.new = false;
    this.seleccionado = true;
    this.formularioTipoVecino.patchValue({
      id: data.id,
      descripcion: data.descripcion
    })
  }

  editTipoVecino(): void{

    this.sql.update(this.formularioTipoVecino.value).subscribe(
      data => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadTipoVecinos.emit()
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
