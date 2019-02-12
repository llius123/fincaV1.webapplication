import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      id: new FormControl(0),
      nombre: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      nif: new FormControl('',[Validators.required]),
      iban: new FormControl('',[Validators.required]),
      sufijo: new FormControl('',[Validators.required]),
      poblacion: new FormControl({value: '', disabled: true}, [Validators.required])
    })
  }

  nuevaComunidad() { 
    if(this.poblacionSeleccionada == null){
      this.showTooltip('error', '', 'Selecciona una poblacion')
    }else{
      const comunidad = this.formularioComunidad.value;
      comunidad.poblacion = this.poblacionSeleccionada;
  
      this.sql.create(comunidad).subscribe(
        (data: any) => {
          this.showTooltip('success', '', `${data.msg}`)
          this.sql.reloadComunidades.emit();
        },
        error => this.showTooltip('error', '', `${error.msg}`)
      )
    }
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
      poblacion: data.descripcion
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
