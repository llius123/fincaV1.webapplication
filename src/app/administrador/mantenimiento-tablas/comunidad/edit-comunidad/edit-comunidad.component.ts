import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionProvinciaService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-edit-comunidad',
  templateUrl: './edit-comunidad.component.html',
  styleUrls: ['./edit-comunidad.component.css'],
  providers: [MessageService]
})
export class EditComunidadComponent implements OnInit {

  constructor(private comunidadService: ComunidadService, private messageService: MessageService, private poblacionService: PoblacionProvinciaService) { }

  @Input() seleccionado: boolean;
  @Input() comunidadHijo: Subject<ComunidadInterface>;
  formularioComunidad: FormGroup;
  display_comunidad: boolean = false;
  poblaciones: PoblacionInterface[];

  cod_poblacionSeleccted: PoblacionInterface;

  ngOnInit() {
    this.getData();
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

  getData(): void {
    this.comunidadHijo.subscribe(
      (data: ComunidadInterface) => {
        this.putComunidadForm(data)
      }
    )
  }
  putComunidadForm(data: ComunidadInterface): void {
    this.cod_poblacionSeleccted = data.poblacion;
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
    comunidad.poblacion = this.cod_poblacionSeleccted;
    console.log(comunidad)
    this.comunidadService.save(comunidad).subscribe(
      (data: ErrorInterface) => {
        this.showTooltip('success', '', `${data.msg}`);
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', `${error.msg}`);
      }
    )
  }

  showDialog() {
    this.display_comunidad = true;
    this.poblacion();
  }

  poblacion(): void {
    this.poblacionService.getAllPoblacion().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void {
    this.formularioComunidad.patchValue({
      poblacion: poblacion.descripcion
    })
    this.cod_poblacionSeleccted = poblacion;
    this.closeModals();
  }
  closeModals(): void {
    this.display_comunidad = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
