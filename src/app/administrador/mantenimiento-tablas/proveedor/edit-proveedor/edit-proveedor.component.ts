import { ProveedorService } from './../../../../service/proveedor/proveedor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css'],
  providers: [MessageService]
})
export class EditProveedorComponent implements OnInit {

  constructor(private messageService: MessageService, private poblacionService: PoblacionService, private sql: ProveedorService) { }

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<ProveedorInterface>;
  poblacionSeleccionada: PoblacionInterface;
  formularioProveedor: FormGroup;

  display_poblacion: boolean = false;
  poblaciones: PoblacionInterface[];
  new: boolean = false;

  ngOnInit() {
    this.hijo.subscribe((data: ProveedorInterface) => {
      this.putProveedorForm(data)
    });
    this.formularioProveedor = new FormGroup({
      id: new FormControl(),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      poblacion: new FormControl({ value: '', disabled: true }, [Validators.required])
    })
  }
  putProveedorForm(data: ProveedorInterface): void {
    this.poblacionSeleccionada = data.poblacion;
    this.formularioProveedor.patchValue({
      id: data.id,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
      poblacion: data.poblacion.descripcion
    })
  }

  editProveedor(): void {
    if (this.poblacionSeleccionada == null) {
      this.showTooltip('error', '', 'Selecciona una Poblacion')
    } else {

      const proveedor: ProveedorInterface = this.formularioProveedor.value;

      proveedor.poblacion = this.poblacionSeleccionada;

      this.sql.update(proveedor).subscribe(
        (response: ErrorInterface) => {
          this.showTooltip('success', '', `${response.msg}`)
          this.sql.reloadProveedores.emit();
        },
        (error: ErrorInterface) => {
          this.showTooltip('error', '', `${error.msg}`)
        }
      )
    }
  }

  newProveedor(): void {
    this.new = true;
    this.seleccionado = false;
  }

  showDialog() {
    this.poblacion()
    this.display_poblacion = true;
  }
  closeModals(): void {
    this.display_poblacion = false;
  }

  poblacion(): void {
    this.poblacionService.getAll().subscribe(
      (data: PoblacionInterface[]) => {
        this.poblaciones = data;
      }
    )
  }
  savePoblacion(poblacion: PoblacionInterface): void {
    this.formularioProveedor.patchValue({
      poblacion: poblacion.descripcion
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
