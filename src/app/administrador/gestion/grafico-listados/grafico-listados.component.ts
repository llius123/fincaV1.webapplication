
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

  optionsdataCobradoDoughnut: any;
  dataCobradoDoughnut: boolean = false;

  optionsdataTipoFacturaDoughnut: any
  dataTipoFacturaDoughnut: boolean = false;

  datosCobrados: FacturaProveedorInterface[];

  constructor(private config: ConfigService, private facturaSQL: FacturaService, private tipoFacturaSQL: TipoFacturaService) {
    this.es = config.formatoFechaDatePicker;
  }



  ngOnInit() {
    this.optionsdataCobradoDoughnut = {
      title: {
        display: true,
        text: 'Cobrado',
        fontSize: 20
      },
      legend: {
        position: 'top'
      }
    };
    this.optionsdataTipoFacturaDoughnut = {
      title: {
        display: true,
        text: 'Tipos de facturas',
        fontSize: 20
      },
      legend: {
        position: 'top'
      }
    }
  }

  mostrar(panel: string) {
    switch (panel) {
      case 'cobradodoughnut':
        this.dataCobradoDoughnut = true;
        this.dataTipoFacturaDoughnut = false;
        break;
      case 'tipofacturadoughnut':
        this.dataCobradoDoughnut = false;
        this.dataTipoFacturaDoughnut = true;
        break;
    }
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
        this.dataCobrado = {
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
        this.mostrar('cobradodoughnut');
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
        this.dataTipoFactura = {
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
        this.mostrar('tipofacturadoughnut');
      }
    )
  }

}
