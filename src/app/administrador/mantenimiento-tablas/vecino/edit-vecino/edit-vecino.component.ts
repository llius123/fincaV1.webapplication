import { ComunidadService } from './../../../../service/comunidad/comunidad.service';
import { Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../../../../node_modules/primeng/components/common/messageservice';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../../../../node_modules/@angular/forms';
import { Subject } from '../../../../../../node_modules/rxjs';
import { VecinoService } from '../../../../service/vecino/vecino.service';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-vecino',
  templateUrl: './edit-vecino.component.html',
  styleUrls: ['./edit-vecino.component.css'],
  providers: [MessageService]
})
export class EditVecinoComponent implements OnInit, OnDestroy {

  constructor(private messageService: MessageService, private fb: FormBuilder, private vecinoSQL: VecinoService, private comunidadService: ComunidadService, private tipovecinoService: TipoVecinoService, private poblacionService: PoblacionService) { }

  @Input() seleccionado: boolean;
  @Input() vecinoHijo: Subject<VecinoInterface>;
  new: boolean = false;
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
    this.getData();
    this.formularioVecino = new FormGroup({
      id: new FormControl({value:''}),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      nif: new FormControl('', [Validators.required]),
      iban: new FormControl('', [Validators.required]),
      num_mandato: new FormControl('', [Validators.required]),
      fecha_mandato: new FormControl('', [Validators.required]),
      porcentaje_participacion: new FormControl('', [Validators.required]),
      comunidad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      id_tipovecino: new FormControl('', [Validators.required]),
      poblacion: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl()
    })
  }

  ngOnDestroy() {
    this.vecinoHijo.unsubscribe();
  }

  getData():void {
    this.vecinoHijo.subscribe((vecino: VecinoInterface) => {
      console.log(vecino)
      this.putVecinoForm(vecino)
    });
  }

  newVecino(): void{
    this.new = true;
    this.seleccionado = false;
  }


  putVecinoForm(vecino: VecinoInterface): void {
    this.new = false;
    this.seleccionado = true;

    this.comunidadSeleccionada = vecino.comunidad;
    this.tipovecinoSeleccionado = vecino.id_tipovecino;
    this.poblacionSeleccionada = vecino.poblacion;

    this.formularioVecino.patchValue({
      id: vecino.id,
      nombre: vecino.nombre,
      direccion: vecino.direccion,
      numero: vecino.numero,
      nif: vecino.nif,
      iban: vecino.iban,
      num_mandato: vecino.num_mandato,
      fecha_mandato: vecino.fecha_mandato,
      porcentaje_participacion: vecino.porcentaje_participacion,
      comunidad: vecino.comunidad.nombre,
      email: vecino.email,
      telefono: vecino.telefono,
      id_tipovecino: vecino.id_tipovecino.descripcion,
      poblacion: vecino.poblacion.cod_postal,
      login: vecino.login,
      pass: vecino.pass
    })
  }

  editVecino(): void {

    const vecino: VecinoInterface = this.formularioVecino.value;

    vecino.comunidad = this.comunidadSeleccionada;
    vecino.id_tipovecino = this.tipovecinoSeleccionado;
    vecino.poblacion = this.poblacionSeleccionada;
    if(!vecino.pass){
      vecino.pass = '';
    }

    this.vecinoSQL.updateVecino(vecino).subscribe(
      (response: ErrorInterface) => {
        this.showTooltip('success', '', `${response.msg}`)
        this.vecinoSQL.reloadVecinos.emit();
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', `${error.msg}`)
      }
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
  closeModals(): void{
    this.display_comunidad = false;
    this.display_tipovecino = false;
    this.display_poblacion = false;
  }

  comunidad() : void{
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

  tipoVecino(): void{
    this.tipovecinoService.getAll().subscribe(
      (tipovecino: TipovecinoInterface[]) => {
        this.tipovecinos = tipovecino;
      }
    )
  }
  saveVecino(tipovecino: TipovecinoInterface): void{
    this.formularioVecino.patchValue({
      id_tipovecino: tipovecino.descripcion
    })
    this.tipovecinoSeleccionado = tipovecino;
    this.closeModals();
  }

  poblacion(): void{
    this.poblacionService.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void{
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
