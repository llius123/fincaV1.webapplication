import { Component, OnInit } from '@angular/core';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css'],
  providers: [MessageService]
})
export class ComunidadComponent implements OnInit {

  constructor(private sql: ComunidadService, private messageService: MessageService) {
    sql.reloadComunidades.subscribe(
      data => this.getAllComunidades()
    );
  }

  searchName: string;
  comunidades: ComunidadInterface[];

  parentMessage = false;
  comunidadEdit: ComunidadInterface = null;

  ngOnInit() {
    this.getAllComunidades();
  }

  getAllComunidades(): void {
    this.sql.getAll().subscribe(
      (data: ComunidadInterface[]) => {
        this.comunidades = data;
      }
    )
  }

  deleteComunidad(data: ComunidadInterface): void {
    this.sql.delete(data).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.getAllComunidades();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  padre: Subject<ComunidadInterface> = new Subject();
  editComunidad(data: ComunidadInterface): void {
    this.padre.next(data);
    this.parentMessage = true;
    this.comunidadEdit = data;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
