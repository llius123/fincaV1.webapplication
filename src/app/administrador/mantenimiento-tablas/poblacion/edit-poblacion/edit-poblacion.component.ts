import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-edit-poblacion',
  templateUrl: './edit-poblacion.component.html',
  styleUrls: ['./edit-poblacion.component.css'],
  providers: [MessageService]
})
export class EditPoblacionComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<PoblacionInterface>;
  formulario: FormGroup;
  provincia: ProvinciaInterface;

  constructor(private messageService: MessageService, private sql: PoblacionService) { }

  ngOnInit() {
    this.hijo.subscribe(
      data => this.putForm(data)
    )
    this.formulario = new FormGroup({
      cod_postal: new FormControl(),
      descripcion: new FormControl(),
      cod_provincia: new FormControl()
    })
  }

  putForm(data): void {
    this.provincia = data.cod_provincia;
    console.log(data);
    this.formulario.patchValue({
      cod_postal: data.cod_postal,
      descripcion: data.descripcion,
      cod_provincia: data.cod_provincia.descripcion
    })
  }

  edit(): void{
    const poblacion = this.formulario.value;
    poblacion.cod_provincia = this.provincia;
    this.sql.updatePoblacion(poblacion).subscribe(
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
