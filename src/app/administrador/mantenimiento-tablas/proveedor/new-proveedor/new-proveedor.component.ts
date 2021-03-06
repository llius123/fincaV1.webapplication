import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';

@Component({
  selector: 'app-new-proveedor',
  templateUrl: './new-proveedor.component.html',
  styleUrls: ['./new-proveedor.component.css'],
  providers: [MessageService]
})
export class NewProveedorComponent implements OnInit {

  constructor(private messageService: MessageService, private sql: ProveedorService, private poblacionSQL: PoblacionService) { }

  formularioProveedor: FormGroup;
  display_poblacion: boolean = false;
  poblaciones: PoblacionInterface[];
  poblacionSeleccionada: PoblacionInterface;

  ngOnInit() {
    this.formularioProveedor = new FormGroup({
      id: new FormControl(),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      poblacion: new FormControl({value: '', disabled: true}, [Validators.required])
    })
  }

  newProveedor() {
    if(this.poblacionSeleccionada == null){
      this.showTooltip('error', '', 'Selecciona una Poblacion')
    }else{
      const proveedor = this.formularioProveedor.value;
  
      proveedor.poblacion = this.poblacionSeleccionada;
  
      this.sql.create(proveedor).subscribe(
        (data: any) => {
          this.showTooltip('success', '', `${data.msg}`)
          this.sql.reloadProveedores.emit();
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
    this.poblacionSQL.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void {
    this.formularioProveedor.patchValue({
      poblacion: poblacion.cod_postal
    })
    this.poblacionSeleccionada = poblacion;
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
