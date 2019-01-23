import { Component, OnInit } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/state';
import { PoblacionProvinciaService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-poblacion-provincia',
  templateUrl: './poblacion-provincia.component.html',
  styleUrls: ['./poblacion-provincia.component.css'],
  providers: [MessageService]
})
export class PoblacionProvinciaComponent implements OnInit {

  constructor(private sql: PoblacionProvinciaService, private messageService: MessageService) { }

  poblaciones: PoblacionInterface[];
  provincias: ProvinciaInterface[];

  display_provincia: boolean = false;
  display_poblacion: boolean = false;

  formularioProvincia: FormGroup;
  formularioPoblacion: FormGroup;

  provinciaAux: any;

  ngOnInit() {
    this.getData();
    this.formularioProvincia = new FormGroup({
      cod_provincia: new FormControl(),
      descripcion: new FormControl()
    })
    this.formularioPoblacion = new FormGroup({
      cod_postal: new FormControl(),
      descripcion: new FormControl(),
      cod_provincia: new FormControl()
    })
  }

  getData(): void {
    this.sql.getAllPoblacion().subscribe(
      data => this.poblaciones = data
    )
    this.sql.getAllProvincia().subscribe(
      data => this.provincias = data
    )
  }

  showDialogProvincia(data: ProvinciaInterface) {
    this.formularioProvincia.patchValue({
      cod_provincia: data.cod_provincia,
      descripcion: data.descripcion
    })
    this.display_provincia = true;
    this.display_poblacion = false;
  }
  showDialogPoblacion(data: any) {
    this.provinciaAux = data.provincia;
    this.formularioPoblacion.patchValue({
      cod_postal: data.cod_postal,
      descripcion: data.descripcion,
      cod_provincia: data.cod_provincia.descripcion
    })
    this.display_provincia = false;
    this.display_poblacion = true;
  }
  edit(option: string): void {
    switch (option) {
      case 'provincia':
        this.sql.updateProvincia(this.formularioProvincia.value).subscribe(
          data => this.showTooltip('success', '', `${data.msg}`),
          error => this.showTooltip('error', '', `${error.msg}`)
        )
        break;
      case 'poblacion':
      console.log(this.formularioPoblacion.value);
        this.sql.updatePoblacion(this.formularioPoblacion.value).subscribe(
          data => this.showTooltip('success', '', `${data.msg}`),
          error => this.showTooltip('error', '', `${error.msg}`)
        )
        break;
    }
  }
  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
