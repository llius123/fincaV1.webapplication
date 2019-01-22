import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import { PoblacionProvinciaService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css'],
  providers: [MessageService]
})
export class EditProveedorComponent implements OnInit {

  constructor(private messageService: MessageService, private proveedorSql: ProveedorService, private poblacionService: PoblacionProvinciaService) { }

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<ProveedorInterface>;
  poblacionSeleccionada: PoblacionInterface;
  formularioProveedor: FormGroup;

  display_poblacion: boolean = false;
  poblaciones: PoblacionInterface[];

  ngOnInit() {
    this.hijo.subscribe((data: ProveedorInterface) => {
      console.log(data)
      this.putVecinoForm(data)
    });
    this.formularioProveedor = new FormGroup({
      id: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      email: new FormControl(),
      poblacion: new FormControl()
    })
  }
  putVecinoForm(data: ProveedorInterface): void {
    this.poblacionSeleccionada = data.poblacion;
    this.formularioProveedor.patchValue({
      id: data.id,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
      poblacion: data.poblacion.cod_postal
    })
  }

  editProveedor(): void {

    const proveedor: ProveedorInterface = this.formularioProveedor.value;

    proveedor.poblacion = this.poblacionSeleccionada;

    this.proveedorSql.updateProveedor(proveedor).subscribe(
      (response: ErrorInterface) => {
        this.showTooltip('success', '', `${response.msg}`)
      },
      (error: ErrorInterface) => {
        this.showTooltip('error', '', `${error.msg}`)
      }
    )
  }

  showDialog() {
    this.poblacion()
    this.display_poblacion = true;
  }
  closeModals(): void {
    this.display_poblacion = false;
  }

  poblacion(): void {
    this.poblacionService.getAllPoblacion().subscribe(
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


  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
