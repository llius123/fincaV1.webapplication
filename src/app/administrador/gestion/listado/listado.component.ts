import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { Router } from '@angular/router';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { ConfigService } from 'src/app/service/config/config.service';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import * as moment from 'src/assets/moment-with-locales.js';
import { PdfService } from 'src/app/service/pdf.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private sql: FacturaService, private router: Router, private tipofacturaSQL: TipoFacturaService, private config: ConfigService, private proveedorSQL: ProveedorService, private pdfService: PdfService) { }

  facturas: FacturaProveedorInterface[];
  oFiltro: boolean = false;

  //proveedorSeleccionado: ProveedorInterface = { id: null, direccion: null, telefono: null, email: null, poblacion: null };
  proveedorSeleccionado = '';
  display_proveedor: boolean = false;

  comunidadSeleccionado = '';
  display_comunidad: boolean = false;

  tipofacturas: TipofacturaInterface[];
  proveedores: ProveedorInterface[];

  es: any;

  //NgModel bindeados
  tipofacturaSelect: any;
  cobradoSelect: any;
  desdeFecha: Date;
  hastaFecha: Date;
  proveedorSelect: any;

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.es = this.config.formatoFechaDatePicker;
    this.sql.getAll().subscribe(
      data => this.facturas = data
    )
    this.tipofacturaSQL.getAll().subscribe(
      data => this.tipofacturas = data
    )
    this.proveedorSQL.getAll().subscribe(
      data => this.proveedores = data
    )
  }

  selected(data: any, table: string) {
    switch (table) {
      case 'proveedor':
        this.proveedorSeleccionado = data;
        this.display_proveedor = true;
        this.display_comunidad = false;
        break;
      case 'comunidad':
        this.comunidadSeleccionado = data;
        this.display_proveedor = false;
        this.display_comunidad = true;
        break;
    }
  }

  editFactura(factura: FacturaProveedorInterface) {
    const url = `/admin/gestion/editfactura/${factura.id}`
    this.router.navigate([url])
  }

  filtro() {
    if (this.oFiltro == true) {
      this.oFiltro = false;
    } else {
      this.oFiltro = true;
    }
  }

  onChange(tabla: string) {
    switch (tabla) {
      case 'cobrado':
        if (this.cobradoSelect != 0) {
          this.sql.filtroGeneral('cobrado', this.cobradoSelect).subscribe(
            data => this.facturas = data
          )
          this.tipofacturaSelect = 0;
          this.desdeFecha = null;
          this.hastaFecha = null;
          this.proveedorSelect = 0;
        } else {
          this.getAll()
        }
        break;
      case 'tipofactura':
        if (this.tipofacturaSelect > 0) {
          this.sql.filtroGeneral('id_tipofactura', this.tipofacturaSelect).subscribe(
            data => this.facturas = data
          )
          this.desdeFecha = null;
          this.hastaFecha = null;
          this.proveedorSelect = 0;
          this.cobradoSelect = 0;
        } else {
          this.getAll()
        }
        break;
      case 'desdeFecha':
        if (this.hastaFecha) {
          this.sql.filtroFecha(`${moment(this.desdeFecha).format("YYYY-MM-DD")}`, `${moment(this.hastaFecha).format("YYYY-MM-DD")}`).subscribe(
            data => this.facturas = data
          )
          this.tipofacturaSelect = 0;
          this.proveedorSelect = 0;
          this.cobradoSelect = 0;
        }
        break;
      case 'hastaFecha':
        if (this.desdeFecha) {
          this.sql.filtroFecha(`${moment(this.desdeFecha).format("YYYY-MM-DD")}`, `${moment(this.hastaFecha).format("YYYY-MM-DD")}`).subscribe(
            data => this.facturas = data
          )
          this.tipofacturaSelect = 0;
          this.proveedorSelect = 0;
          this.cobradoSelect = 0;
        }
        break;
      case 'proveedor':
        if (this.proveedorSelect > 0) {
          this.sql.filtroGeneral('id_proveedor', this.proveedorSelect).subscribe(
            data => this.facturas = data
          )
          this.tipofacturaSelect = 0;
          this.desdeFecha = null;
          this.hastaFecha = null;
          this.cobradoSelect = 0;
        } else {
          this.getAll()
        }
        break;
    }
  }

  pdf(data: FacturaProveedorInterface){
    this.pdfService.newPdf(data);
  }

  reiniciarFiltros(){
    this.tipofacturaSelect = 0;
    this.desdeFecha = null;
    this.hastaFecha = null;
    this.proveedorSelect = 0;
    this.cobradoSelect = 0;
    this.getAll();
  }

}
