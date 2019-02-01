import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { Router } from '@angular/router';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { ConfigService } from 'src/app/service/config/config.service';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import * as moment from 'src/assets/moment-with-locales.js';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private sql: FacturaService, private router: Router, private tipofacturaSQL: TipoFacturaService, private config: ConfigService, private proveedorSQL: ProveedorService) { }

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
        console.log(this.cobradoSelect)
        this.sql.filtroGeneral('cobrado', this.cobradoSelect).subscribe(
          data => this.facturas = data
        )
        break;
      case 'tipofactura':
        console.log(this.tipofacturaSelect)
        this.sql.filtroGeneral('id_tipofactura', this.tipofacturaSelect).subscribe(
          data => this.facturas = data
        )
        break;
      case 'desdeFecha':
        console.log(this.desdeFecha);
        if (this.hastaFecha) {
          this.sql.filtroFecha(`${moment(this.desdeFecha).format("YYYY-MM-DD")}`, `${moment(this.hastaFecha).format("YYYY-MM-DD")}`).subscribe(
            data => this.facturas = data
          )
        }
        break;
      case 'hastaFecha':
        console.log(this.hastaFecha);
        if (this.desdeFecha) {
          this.sql.filtroFecha(`${moment(this.desdeFecha).format("YYYY-MM-DD")}`, `${moment(this.hastaFecha).format("YYYY-MM-DD")}`).subscribe(
            data => this.facturas = data
          )
        }
        break;
    }
  }



}
