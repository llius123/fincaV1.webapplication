import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private sql: FacturaService) { }

  facturas: FacturaProveedorInterface[];

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.sql.getAll().subscribe(
      data => this.facturas = data
    )
  }

}
