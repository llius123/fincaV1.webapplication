import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-edit-comunidad',
  templateUrl: './edit-comunidad.component.html',
  styleUrls: ['./edit-comunidad.component.css'],
  providers: [MessageService]
})
export class EditComunidadComponent implements OnInit {

  constructor(private sql: ComunidadService, private messageService: MessageService, private poblacionService: PoblacionService) { }

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<ComunidadInterface>;
  formularioComunidad: FormGroup;
  display_poblacion: boolean = false;
  poblaciones: PoblacionInterface[];

  new: boolean = false;

  cod_poblacionSelected;

  ngOnInit() {
    this.hijo.subscribe(
      (data: ComunidadInterface) => {
        this.putComunidadForm(data)
      }
    )
    this.formularioComunidad = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      direccion: new FormControl(),
      nif: new FormControl(),
      iban: new FormControl(),
      sufijo: new FormControl(),
      poblacion: new FormControl()
    })
  }

  putComunidadForm(data: ComunidadInterface): void {
    this.new = false;
    this.seleccionado = true;
    this.cod_poblacionSelected = data.poblacion;
    this.formularioComunidad.patchValue({
      id: data.id,
      nombre: data.nombre,
      direccion: data.direccion,
      nif: data.nif,
      iban: data.iban,
      sufijo: data.sufijo,
      poblacion: data.poblacion.descripcion
    })
  }

  editComunidad(): void {
    const comunidad: ComunidadInterface = this.formularioComunidad.value;
    comunidad.poblacion = this.cod_poblacionSelected;
    this.sql.update(comunidad).subscribe(
      (data: ErrorInterface) => {
        this.showTooltip('success', '', `${data.msg}`);
        this.sql.reloadComunidades.emit();
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', `${error.msg}`);
      }
    )
  }

  newRegistro(): void {
    this.new = true;
    this.seleccionado = false;
  }

  showDialog() {
    this.display_poblacion = true;
    this.poblacion();
  }

  poblacion(): void {
    this.poblacionService.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void {
    this.formularioComunidad.patchValue({
      poblacion: poblacion.descripcion
    })
    this.cod_poblacionSelected = poblacion;
    this.closeModals();
  }
  closeModals(): void {
    this.display_poblacion = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
