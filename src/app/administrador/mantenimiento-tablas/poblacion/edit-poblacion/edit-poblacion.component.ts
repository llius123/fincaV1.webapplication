import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';

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

  display_provincia: boolean = false;
  provincias: ProvinciaInterface[];

  constructor(private messageService: MessageService, private sql: PoblacionService, private provinciaSQL: ProvinciaService) { }

  ngOnInit() {
    this.formularioPoblacion = new FormGroup({
      id: new FormControl(),
      cod_provincia: new FormControl({value: '', disabled: true}, [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      cod_postal: new FormControl('', [Validators.required])
    })
    this.hijo.subscribe(data => {
      this.putProvinciaForm(data)
    });
  }

  putProvinciaForm(data): void {
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

  showDialog() {
    this.display_provincia = true;
    this.provincia();
  }

  provincia(): void {
    this.provinciaSQL.getAll().subscribe(
      (data: ProvinciaInterface[]) => {
        this.provincias = data;
      }
    )
  }
  saveProvincia(provincia: ProvinciaInterface): void {
    console.log(provincia)
    this.formularioPoblacion.patchValue({
      cod_provincia: provincia.cod_provincia
    })
    this.provinciaSeleccionada = provincia;
    this.closeModals();
  }

  closeModals(): void {
    this.display_provincia = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
