import { Component, OnInit } from '@angular/core';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tipofactura',
  templateUrl: './tipofactura.component.html',
  styleUrls: ['./tipofactura.component.css']
})
export class TipofacturaComponent implements OnInit {

  constructor(private sql: TipoFacturaService) { }

  tipofacturas: TipofacturaInterface[];
  parentMessage = false;
  padre: Subject<TipovecinoInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.sql.getAll().subscribe(
      data => this.tipofacturas = data,
      error => console.log(error)
    )
  }
  edit(data: TipofacturaInterface): void{
    this.padre.next(data);
    this.parentMessage = true;
  }

}
