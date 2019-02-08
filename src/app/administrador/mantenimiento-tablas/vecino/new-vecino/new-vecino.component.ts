import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VecinoService } from 'src/app/service/vecino/vecino.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-new-vecino',
  templateUrl: './new-vecino.component.html',
  styleUrls: ['./new-vecino.component.css'],
  providers: [MessageService]
})
export class NewVecinoComponent implements OnInit {

  constructor(private sql: VecinoService, private messageService: MessageService, private comunidadService: ComunidadService, private tipovecinoService: TipoVecinoService, private poblacionService: PoblacionService) { }

  formularioVecino: FormGroup;

  display_comunidad: boolean = false;
  display_tipovecino: boolean = false;
  display_poblacion: boolean = false;

  comunidades: ComunidadInterface[];
  tipovecinos: TipovecinoInterface[];
  poblaciones: PoblacionInterface[];

  comunidadSeleccionada: ComunidadInterface;
  tipovecinoSeleccionado: TipovecinoInterface;
  poblacionSeleccionada: PoblacionInterface;

  ngOnInit() {
    this.formularioVecino = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      nif: new FormControl('', [Validators.required]),
      iban: new FormControl('', [Validators.required]),
      porcentaje_participacion: new FormControl('', [Validators.required]),
      comunidad: new FormControl({value: '', disabled: true}, [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      id_tipovecino: new FormControl({value: '', disabled: true}, [Validators.required]),
      poblacion: new FormControl({value: '', disabled: true}, [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    })
  }

  nuevoVecino() {
    const vecino = this.formularioVecino.value;

    vecino.comunidad = this.comunidadSeleccionada;
    vecino.id_tipovecino = this.tipovecinoSeleccionado;
    vecino.poblacion = this.poblacionSeleccionada;
    vecino.id = 0;

    this.sql.newVecino(vecino).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadVecinos.emit();
      },
      error => this.showTooltip('error', '', 'Error creando el vecino')
    )
  }

  showDialog(dialog: string) {
    switch (dialog) {
      case 'comunidad':
        this.display_comunidad = true;
        this.display_tipovecino = false;
        this.display_poblacion = false;
        this.comunidad();
        break;
      case 'tipovecino':
        this.display_comunidad = false;
        this.display_tipovecino = true;
        this.display_poblacion = false;
        this.tipoVecino();
        break;
      case 'poblacion':
        this.display_poblacion = true;
        this.display_comunidad = false;
        this.display_tipovecino = false;
        this.poblacion();
        break;
    }
  }

  closeModals(): void {
    this.display_comunidad = false;
    this.display_tipovecino = false;
    this.display_poblacion = false;
  }

  comunidad(): void {
    this.comunidadService.getAll().subscribe(
      (comunidades: ComunidadInterface[]) => {
        this.comunidades = comunidades;
      }
    )
  }
  saveComunidad(comunidad: ComunidadInterface): void {
    this.formularioVecino.patchValue({
      comunidad: comunidad.nombre,
    })
    this.comunidadSeleccionada = comunidad;
    this.closeModals();
  }

  tipoVecino(): void {
    this.tipovecinoService.getAll().subscribe(
      (tipovecino: TipovecinoInterface[]) => {
        this.tipovecinos = tipovecino;
      }
    )
  }
  saveVecino(tipovecino: TipovecinoInterface): void {
    this.formularioVecino.patchValue({
      id_tipovecino: tipovecino.descripcion
    })
    this.tipovecinoSeleccionado = tipovecino;
    this.closeModals();
  }

  poblacion(): void {
    this.poblacionService.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void {
    this.formularioVecino.patchValue({
      poblacion: poblacion.cod_postal
    })
    this.poblacionSeleccionada = poblacion;
    this.closeModals();
  }


  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
