import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private sql: FacturaService) { }

  facturas: FacturaProveedorInterface[];

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.sql.getAll().subscribe(
      data => this.facturas = data
    )
  }
}
