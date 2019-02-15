import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/service/factura/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(private sql: FacturaService) { }

  facturas: FacturaProveedorInterface[];

  datos: boolean = false;
  ngOnInit() {
    this.sql.getAll2().subscribe(
      data => {
        this.facturas = data
        this.datos = true;
      }
    )
  }

}
