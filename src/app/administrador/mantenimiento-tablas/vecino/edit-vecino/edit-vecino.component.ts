import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../../../../node_modules/primeng/components/common/messageservice';
import { FormGroup, FormControl, FormBuilder } from '../../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-edit-vecino',
  templateUrl: './edit-vecino.component.html',
  styleUrls: ['./edit-vecino.component.css'],
  providers: [MessageService]
})
export class EditVecinoComponent implements OnInit {

  constructor( private messageService: MessageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vecinoEdited = this.formBuilder.group({
      nombre: [ this.vecino.nombre]
    })
  }

  @Input() seleccionado: boolean;
  @Input() vecino: VecinoInterface;
  vecinoEdited: FormGroup;

  editVecino(vecino: VecinoInterface): void{
    console.log(vecino)
  }


  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
