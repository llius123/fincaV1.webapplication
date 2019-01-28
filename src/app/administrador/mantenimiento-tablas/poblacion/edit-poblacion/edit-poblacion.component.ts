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
  formularioPoblacion: FormGroup;
  new: boolean = false;

  provinciaSeleccionada: ProvinciaInterface;

  constructor(private messageService: MessageService, private sql: PoblacionService) { }

  ngOnInit() {
    this.formularioPoblacion = new FormGroup({
      id: new FormControl(),
      cod_provincia: new FormControl(),
      descripcion: new FormControl(),
      cod_postal: new FormControl()
    })
    this.hijo.subscribe(data => {
      this.putProvinciaForm(data)
    });
  }

  putProvinciaForm(data): void {
    console.log(data)
    this.provinciaSeleccionada = data.cod_provincia;
    this.new = false;
    this.seleccionado = true;
    this.formularioPoblacion.patchValue({
      id: data.id,
      cod_provincia: data.cod_provincia.descripcion,
      descripcion: data.descripcion,
      cod_postal: data.cod_postal
    })
  }
  edit(): void {
    const poblacion = this.formularioPoblacion.value;
    poblacion.cod_provincia = this.provinciaSeleccionada;
    this.sql.update(poblacion).subscribe(
      data => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadPoblaciones.emit()
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  newRegistro(): void {
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
