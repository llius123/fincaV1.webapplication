import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css'],
  providers: [MessageService]
})
export class PoblacionComponent implements OnInit {

  constructor(private sql: PoblacionService, private messageService: MessageService) {
    sql.reloadPoblaciones.subscribe(
      data => {
        this.getData()
      }
    )
  }

  poblaciones: PoblacionInterface[];
  parentMessage = false;
  padre: Subject<PoblacionInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sql.getAll().subscribe(
      data => {
        this.poblaciones = data
      },
      error => console.log(error.msg)
    )
  }

  edit(poblacion: PoblacionInterface): void {
    this.padre.next(poblacion);
    this.parentMessage = true;
  }
  delete(data: PoblacionInterface): void {
    this.sql.delete(data).subscribe(
      data => {
        this.sql.reloadPoblaciones.emit();
        this.showTooltip('success', '', `${data.msg}`)
      },
      error => this.showTooltip('error', '', `${error.msg}`)
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
