
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config/config.service';
import { FacturaService } from 'src/app/service/factura/factura.service';
import * as moment from 'src/assets/moment-with-locales.js';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-grafico-listados',
  templateUrl: './grafico-listados.component.html',
  styleUrls: ['./grafico-listados.component.css']
})
export class GraficoListadosComponent implements OnInit {

  data: any;
  dataCobrado: any;
  dataTipoFactura: any;
  es: any;

  desdeFecha: Date;
  hastaFecha: Date;
  desdeFechaCobrado: Date;
  hastaFechaCobrado: Date;

  datosCobrados: FacturaProveedorInterface[];

  constructor(private config: ConfigService, private facturaSQL: FacturaService, private tipoFacturaSQL: TipoFacturaService) {
    this.es = config.formatoFechaDatePicker;
  }

  ngOnInit() {
  }

  si: number = 0;
  no: number = 0;
  graficoCobrado() {
    this.facturaSQL.filtroFecha(`${moment(this.desdeFechaCobrado).format("YYYY-MM-DD")}`, `${moment(this.hastaFechaCobrado).format("YYYY-MM-DD")}`).subscribe(
      (data: FacturaProveedorInterface[]) => {
        this.datosCobrados = data;
        for (var i = 0; i < this.datosCobrados.length; i++) {
          if (this.datosCobrados[i].cobrado === 's') {
            this.si++;
          } else {
            this.no++;
          }
        }
        this.dataCobrado = {
          labels: ['Si', 'No'],
          datasets: [
            {
              data: [this.si, this.no],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
              ]
            }]
        };
      }
    )
  }

  facturas: FacturaProveedorInterface[];
  tipoFacturas: TipofacturaInterface[];
  arrayDesc = new Array;
  arrayDatos = new Array;
  graficoTipoFactura() {

    this.tipoFacturaSQL.getAll().subscribe(
      (data: TipofacturaInterface[]) => {
        for (var i = 0; i < data.length; i++) {
          this.arrayDesc.push(data[i].descripcion);
        }
        this.facturaSQL.getAll().subscribe(
          (data: FacturaProveedorInterface[]) =>{
            for(var i = 0; i < data.length; i++){
              for(var j = 0; j<this.arrayDesc.length; j++){
                if(data[i].tipofactura.descripcion === this.arrayDesc[j]){
                  this.arrayDatos.push(data[i].tipofactura.descripcion);
                }
              }
            }
            this.dataTipoFactura = {
              labels: this.arrayDesc,
              datasets: [
                {
                  data: this.arrayDatos,
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ]
                }]
            };
            console.log(this.arrayDatos)
          }
        )
      }
    )
  }

}
