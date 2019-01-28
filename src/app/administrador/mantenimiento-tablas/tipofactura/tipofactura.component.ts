import { Component, OnInit } from '@angular/core';
import { TipoFacturaService } from 'src/app/service/tipovecino-tipofactura/tipofactura.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-tipofactura',
  templateUrl: './tipofactura.component.html',
  styleUrls: ['./tipofactura.component.css'],
  providers: [MessageService]
})
export class TipofacturaComponent implements OnInit {

  constructor(private sql: TipoFacturaService, private messageService: MessageService) {
    sql.reloadTipoFacturas.subscribe(
      data => {
        this.getData()
      }
    )
  }

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
  edit(tipovecino: TipovecinoInterface): void {
    this.padre.next(tipovecino);
    this.parentMessage = true;
  }
  delete(data: TipovecinoInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadTipoFacturas.emit();
        this.showTooltip('success','',`${data.msg}`)
      },
      error => this.showTooltip('error','',`${error.msg}`)
    )
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
