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

  constructor(private sql: TipoVecinoService, private messageService: MessageService) { }

  ngOnInit() {
    this.formularioTipoVecino = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl()
    })
    this.hijo.subscribe(data => this.putTipoVecinoForm(data));
  }

  putTipoVecinoForm(data: TipovecinoInterface): void{
    this.formularioTipoVecino.patchValue({
      id: data.id,
      descripcion: data.descripcion
    })
  }

  editTipoVecino(): void{

    this.sql.update(this.formularioTipoVecino.value).subscribe(
      data => this.showTooltip('success', '', `${data.msg}`),
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
