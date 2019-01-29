import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-new-comunidad',
  templateUrl: './new-comunidad.component.html',
  styleUrls: ['./new-comunidad.component.css']
})
export class NewComunidadComponent implements OnInit {

  constructor(private messageService: MessageService, private sql: ComunidadService, private poblacionSql: PoblacionService) { }

  formularioComunidad: FormGroup;
  poblacionSeleccionada;

  display_poblacion: boolean = false;
  poblaciones: PoblacionInterface[];

  ngOnInit() {
    this.formularioComunidad = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      direccion: new FormControl(),
      nif: new FormControl(),
      iban: new FormControl(),
      sufijo: new FormControl(),
      cod_poblacion: new FormControl()
    })
  }

  nuevaComunidad() {
    const comunidad = this.formularioComunidad.value;
    comunidad.cod_poblacion = this.poblacionSeleccionada;


    this.sql.create(comunidad).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadComunidades.emit();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  showDialog() {
    this.display_poblacion = true;
    this.poblacion();
  }

  poblacion(): void {
    this.poblacionSql.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(data: PoblacionInterface): void {
    this.formularioComunidad.patchValue({
      cod_poblacion: data.descripcion
    })
    this.poblacionSeleccionada = data;
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
