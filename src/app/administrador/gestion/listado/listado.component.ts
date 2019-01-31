import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private sql: FacturaService, private router: Router) { }

  facturas: FacturaProveedorInterface[];

  //proveedorSeleccionado: ProveedorInterface = { id: null, direccion: null, telefono: null, email: null, poblacion: null };
  proveedorSeleccionado = '';
  display_proveedor: boolean = false;

  comunidadSeleccionado = '';
  display_comunidad: boolean = false;

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.sql.getAll().subscribe(
      data => this.facturas = data
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

  editFactura(factura: FacturaProveedorInterface){
    const url = `/admin/gestion/editfactura/${factura.id}`
    this.router.navigate([url])
  }

}
