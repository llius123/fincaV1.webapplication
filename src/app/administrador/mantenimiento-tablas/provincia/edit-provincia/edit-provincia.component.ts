import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrls: ['./edit-provincia.component.css'],
  providers: [MessageService]
})
export class EditProvinciaComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<ProvinciaInterface>;
  formulario: FormGroup;

  constructor( private messageService: MessageService, private sql: ProvinciaService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      cod_provincia: new FormControl(),
      descripcion: new FormControl()
    })
    this.hijo.subscribe(
      data => this.putForm(data)
    )
  }

  putForm(data: ProvinciaInterface): void{
    this.formulario.patchValue({
      cod_provincia: data.cod_provincia,
      descripcion: data.descripcion
    })
  }

  edit(): void{
    this.sql.update(this.formulario.value).subscribe(
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
