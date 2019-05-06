import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VecinoService } from '../../../service/vecino/vecino.service';
import { MessageService } from '../../../../../node_modules/primeng/components/common/messageservice';
import { Subject } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-vecino',
  templateUrl: './vecino.component.html',
  styleUrls: ['./vecino.component.css'],
  providers: [MessageService]
})
export class VecinoComponent implements OnInit {

  constructor(private sqlVecino: VecinoService, private messageService: MessageService) {
    sqlVecino.reloadVecinos.subscribe(
      data => this.getAllVecinos()
    )
  }

  searchName: string;
  
  vecinos: VecinoInterface[];
  modal_display_vecino: boolean = false;

  parentMessage = false;

  vecinoEdit: VecinoInterface = null;
  vecinoPadre: Subject<VecinoInterface> = new Subject();

  @Input() fromHijo: Subject<any>;

  ngOnInit() {
    this.getAllVecinos();
  }

  getAllVecinos(): void {
    this.sqlVecino.getAllVecinos().subscribe(
      (data: VecinoInterface[]) => {
        this.vecinos = data;
      }
    )
  }

  editVecino(vecino: VecinoInterface): void {
    this.vecinoPadre.next(vecino);
    this.parentMessage = true;
    this.vecinoEdit = vecino;
  }

  deleteVecino(vecino: VecinoInterface): void {
    this.sqlVecino.deleteVecino(vecino.id).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.getAllVecinos();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }
  toParent() {
    this.getAllVecinos();
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
