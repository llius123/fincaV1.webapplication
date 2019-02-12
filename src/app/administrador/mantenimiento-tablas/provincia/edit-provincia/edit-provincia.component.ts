import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrls: ['./edit-provincia.component.css'],
  providers: [MessageService]
})
export class EditProvinciaComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<ProvinciaInterface>;
  formularioProvincia: FormGroup;
  new: boolean = false;

  constructor(private messageService: MessageService, private sql: ProvinciaService) { }

  ngOnInit() {
    this.formularioProvincia = new FormGroup({
      id: new FormControl(),
      cod_provincia: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required])
    })
    this.hijo.subscribe(data => this.putProvinciaForm(data));
  }

  putProvinciaForm(data: ProvinciaInterface): void {
    this.new = false;
    this.seleccionado = true;
    this.formularioProvincia.patchValue({
      id: data.id,
      cod_provincia: data.cod_provincia,
      descripcion: data.descripcion
    })
  }
  edit(): void {
    this.sql.update(this.formularioProvincia.value).subscribe(
      data => {
        this.showTooltip('success', '', `${data.msg}`)
        this.sql.reloadProvincias.emit()
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  newRegistro(): void {
    this.new = true;
    this.seleccionado = false;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }

}
