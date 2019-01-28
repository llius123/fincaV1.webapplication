import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-poblacion',
  templateUrl: './new-poblacion.component.html',
  styleUrls: ['./new-poblacion.component.css'],
  providers: [MessageService]
})
export class NewPoblacionComponent implements OnInit {

  constructor(private messageService: MessageService, private sql: PoblacionService, private provinciaSQL: ProvinciaService) { }

  formularioPoblacion: FormGroup;
  provinciaSeleccionada: ProvinciaInterface;

  display_provincia: boolean = false;
  provincias: ProvinciaInterface[];

  ngOnInit() {
    this.formularioPoblacion = new FormGroup({
      id: new FormControl(),
      cod_provincia: new FormControl(),
      descripcion: new FormControl(),
      cod_postal: new FormControl()
    })
  }

  nuevaPoblacion() {
    const poblacion = this.formularioPoblacion.value;
    poblacion.cod_provincia = this.provinciaSeleccionada;


    this.sql.create(poblacion).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadPoblaciones.emit();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
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
