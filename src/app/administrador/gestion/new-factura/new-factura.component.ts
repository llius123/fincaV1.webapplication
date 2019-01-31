import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-new-factura',
  templateUrl: './new-factura.component.html',
  styleUrls: ['./new-factura.component.css'],
  providers: [MessageService]
})
export class NewFacturaComponent implements OnInit {

  constructor(private proveedorSQL: ProveedorService, private tipofacturaSQL: TipoFacturaService, private comunidadSQL: ComunidadService, private facturaSQL: FacturaService, private messageService: MessageService) { }

  formularioNuevaFactura: FormGroup;

  proveedores: ProveedorInterface[];
  tipofacturas: TipofacturaInterface[];
  comunidades: ComunidadInterface[];

  display_proveedor: boolean = false;
  display_tipofactura: boolean = false;
  display_comunidad: boolean = false;

  proveedorSelected: ProveedorInterface;
  tipofacturaSelected: TipofacturaInterface;
  comunidadSelected: ComunidadInterface;

  es: any;

  ngOnInit() {
    this.es = this.facturaSQL.formatoFechaDatePicker;
    
    this.formularioNuevaFactura = new FormGroup({
      id:new FormControl(0),
      fecha_registro: new FormControl(),
      proveedor: new FormControl(),
      tipofactura: new FormControl(),
      base_imponible0: new FormControl(),
      base_imponible1: new FormControl(),
      base_imponible2: new FormControl(),
      base_imponible3: new FormControl(),
      tipo_iva1: new FormControl(),
      tipo_iva2: new FormControl(),
      tipo_iva3: new FormControl(),
      cuota_iva1: new FormControl(),
      cuota_iva2: new FormControl(),
      cuota_iva3: new FormControl(),
      total: new FormControl(),
      comunidad: new FormControl(),
      num_factura: new FormControl(),
      cobrado: new FormControl()
    })
  }

  showDialog(dialog: string) {
    switch (dialog) {
      case 'proveedor':
        this.display_proveedor = true;
        this.display_tipofactura = false;
        this.getAll('proveedor');
        break;
      case 'tipofactura':
        this.display_tipofactura = true;
        this.display_proveedor = false;
        this.getAll('tipofactura');
        break;
      case 'comunidad':
        this.display_comunidad = true;
        this.display_tipofactura = false;
        this.display_proveedor = false;
        this.getAll('comunidad');
        break;
    }
  }

  getAll(table: string) {
    switch (table) {
      case 'proveedor':
        this.proveedorSQL.getAll().subscribe(
          data => this.proveedores = data
        )
        break;
      case 'tipofactura':
        this.tipofacturaSQL.getAll().subscribe(
          data => this.tipofacturas = data
        )
        break;
        case 'comunidad':
        this.comunidadSQL.getAll().subscribe(
          data => this.comunidades = data
        )
    }
  }

  saveProveedor(data: ProveedorInterface) {
    this.proveedorSelected = data;
    this.formularioNuevaFactura.patchValue({
      proveedor: data.email
    })
    this.display_proveedor = false;
  }
  saveTipoFactura(data: TipofacturaInterface) {
    this.tipofacturaSelected = data;
    this.formularioNuevaFactura.patchValue({
      tipofactura: data.descripcion
    })
    this.display_tipofactura = false;
  }
  saveComunidad(data: ComunidadInterface){
    this.comunidadSelected = data;
    this.formularioNuevaFactura.patchValue({
      comunidad:data.nombre
    })
    this.display_comunidad = false;
  }

  crearFactura(){
    const factura = this.formularioNuevaFactura.value;
    const fecha: Date = factura.fecha_registro;
    factura.fecha_registro = fecha.getTime();
    factura.proveedor = this.proveedorSelected;
    factura.tipofactura = this.tipofacturaSelected;
    factura.comunidad = this.comunidadSelected;

    this.facturaSQL.create(factura).subscribe(
      data => {
        this.showTooltip('success', '', `${data.msg}`)
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
