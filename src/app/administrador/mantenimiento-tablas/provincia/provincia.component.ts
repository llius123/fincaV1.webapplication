import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css'],
  providers: [MessageService]
})
export class ProvinciaComponent implements OnInit {

  constructor(private sql: ProvinciaService, private messageService: MessageService) {
    sql.reloadProvincias.subscribe(
      data => {
        this.getData()
      }
    )
  }

  provincias: ProvinciaInterface[];
  parentMessage = false;
  padre: Subject<TipovecinoInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.sql.getAll().subscribe(
      data => this.provincias = data,
      error => console.log(error)
    )
  }
  edit(tipovecino: TipovecinoInterface): void {
    this.padre.next(tipovecino);
    this.parentMessage = true;
  }
  delete(data: ProvinciaInterface): void{
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadProvincias.emit();
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
