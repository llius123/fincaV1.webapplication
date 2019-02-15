
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

  optionsDoughnut: any;
  booleanDoughnut: boolean;
  dataDoughnut: any;
  dataTipoFactura: any;
  es: any;

  datosCobrados: FacturaProveedorInterface[];

  constructor(private config: ConfigService, private facturaSQL: FacturaService, private tipoFacturaSQL: TipoFacturaService) {
    this.es = config.formatoFechaDatePicker;
  }



  ngOnInit() {
  }

  mostrar() {
    this.booleanDoughnut = true;
  }

  graficoCobrado() {
    this.facturaSQL.graficoCobrado().subscribe(
      (response: any) => {
        let label = [];
        let data = [];
        for (var i = 0; i < response.length; i++) {
          label.push(response[i][0]);
          data.push(response[i][1])
        }
        this.dataDoughnut = {
          labels: label,
          datasets: [
            {
              data: data,
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
        this.mostrar();
        this.options('Cobrado');
      }
    )
  }

  graficoTipoFactura() {
    this.facturaSQL.graficoTipoFactura().subscribe(
      (response: any) => {
        let label = [];
        let data = [];
        for (var i = 0; i < response.length; i++) {
          label.push(response[i][0]);
          data.push(response[i][1])
        }
        this.dataDoughnut = {
          labels: label,
          datasets: [
            {
              data: data,
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
        this.mostrar();
        this.options('Tipo factura');
      }
    )
  }

  options(titulo: string){
    this.optionsDoughnut = {
      title: {
        display: true,
        text: titulo,
        fontSize: 20,
      },
      legend: {
        position: 'top'
      }
    };
  }

}
