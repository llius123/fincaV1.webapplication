import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'src/assets/moment-with-locales.js';
import { ConfigService } from 'src/app/service/config/config.service';

@Component({
  selector: 'app-edit-factura',
  templateUrl: './edit-factura.component.html',
  styleUrls: ['./edit-factura.component.css'],
  providers: [MessageService]
})
export class EditFacturaComponent implements OnInit {

  constructor(private sql: FacturaService, private router: Router, private route: ActivatedRoute, private proveedorSQL: ProveedorService, private tipofacturaSQL: TipoFacturaService, private comunidadSQL: ComunidadService, private messageService: MessageService, private config: ConfigService) { }

  factura: FacturaProveedorInterface;
  formularioEditFactura: FormGroup;

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
    this.es = this.config.formatoFechaDatePicker;
    this.route.params.subscribe(data => {
      this.sql.getById(data.id).subscribe(
        data => this.putDataForm(data)
      )
    })
    this.formularioEditFactura = new FormGroup({
      id: new FormControl(),
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

  putDataForm(factura: FacturaProveedorInterface) {
    this.proveedorSelected = factura.proveedor;
    this.tipofacturaSelected = factura.tipofactura;
    this.comunidadSelected = factura.comunidad;
    const fecha = new Date(factura.fecha_registro);

    this.formularioEditFactura.patchValue({
      id: factura.id,
      fecha_registro: fecha,
      proveedor: factura.proveedor.direccion,
      tipofactura: factura.tipofactura.descripcion,
      base_imponible0: factura.base_imponible0,
      base_imponible1: factura.base_imponible1,
      base_imponible2: factura.base_imponible2,
      base_imponible3: factura.base_imponible3,
      tipo_iva1: factura.tipo_iva1,
      tipo_iva2: factura.tipo_iva2,
      tipo_iva3: factura.tipo_iva3,
      cuota_iva1: factura.cuota_iva1,
      cuota_iva2: factura.cuota_iva2,
      cuota_iva3: factura.cuota_iva3,
      total: factura.total,
      comunidad: factura.comunidad.nombre,
      num_factura: factura.num_factura,
      cobrado: factura.cobrado
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
    this.formularioEditFactura.patchValue({
      proveedor: data.email
    })
    this.display_proveedor = false;
  }
  saveTipoFactura(data: TipofacturaInterface) {
    this.tipofacturaSelected = data;
    this.formularioEditFactura.patchValue({
      tipofactura: data.descripcion
    })
    this.display_tipofactura = false;
  }
  saveComunidad(data: ComunidadInterface) {
    this.comunidadSelected = data;
    this.formularioEditFactura.patchValue({
      comunidad: data.nombre
    })
    this.display_comunidad = false;
  }

  editarFactura() {
    const factura = this.formularioEditFactura.value;
    factura.proveedor = this.proveedorSelected;
    factura.tipofactura = this.tipofacturaSelected;
    factura.comunidad = this.comunidadSelected;

    this.sql.update(factura).subscribe(
      data => this.showTooltip('success', '', `${data.msg}`),
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
