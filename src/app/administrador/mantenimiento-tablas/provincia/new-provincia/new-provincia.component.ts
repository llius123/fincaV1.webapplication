import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-provincia',
  templateUrl: './new-provincia.component.html',
  styleUrls: ['./new-provincia.component.css'],
  providers: [MessageService]
})
export class NewProvinciaComponent implements OnInit {

  constructor(private sql: ProvinciaService, private messageService: MessageService) { }

  formularioProvincia: FormGroup;

  ngOnInit() {
    this.formularioProvincia = new FormGroup({
      id: new FormControl(),
      cod_provincia: new FormControl(),
      descripcion: new FormControl()
    })
  }

  newProvincia() {
    this.sql.create(this.formularioProvincia.value).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadProvincias.emit();
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
