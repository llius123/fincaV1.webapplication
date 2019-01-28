import { Component, OnInit } from '@angular/core';
import { TipoVecinoService } from 'src/app/service/tipovecino-tipofactura/tipovecino.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tipovecino',
  templateUrl: './tipovecino.component.html',
  styleUrls: ['./tipovecino.component.css'],
  providers: [MessageService]
})
export class TipovecinoComponent implements OnInit {

  constructor(private sql: TipoVecinoService, private messageService: MessageService) {
    sql.reloadTipoVecinos.subscribe(
      data => this.getData()
    )
  }

  tipovecinos: TipovecinoInterface[];

  parentMessage = false;
  padre: Subject<TipovecinoInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => this.tipovecinos = data,
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  edit(tipovecino: TipovecinoInterface): void {
    this.padre.next(tipovecino);
    this.parentMessage = true;
  }
  delete(data: TipovecinoInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadTipoVecinos.emit();
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
