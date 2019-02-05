import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private sql: FacturaService, private router: Router) { }

  listado: boolean = true;
  nueva: boolean = false;

  facturas: FacturaProveedorInterface[];

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.sql.getAll().subscribe(
      data => this.facturas = data
    )
  }

  nuevaFactura(){
    this.listado = false;
    this.nueva = true;
  }

  volver(){
    this.listado = true;
    this.nueva = false;
  }

  cambiar(url: string){
    this.router.navigate([`admin/gestion/${url}`]);
  }
}
