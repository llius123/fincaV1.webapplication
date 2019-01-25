import { Component, OnInit } from '@angular/core';
import { VecinoService } from '../../../service/vecino/vecino.service';
import { MessageService } from '../../../../../node_modules/primeng/components/common/messageservice';
import { Subject } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-vecino',
  templateUrl: './vecino.component.html',
  styleUrls: ['./vecino.component.css']
})
export class VecinoComponent implements OnInit {

  constructor(private sqlVecino: VecinoService) { }

  vecinos: VecinoInterface[];
  modal_display_vecino: boolean = false;

  parentMessage = false;
  
  vecinoEdit: VecinoInterface = null;
  vecinoPadre: Subject<VecinoInterface> = new Subject();

  ngOnInit() {
    this.getAllVecinos();
  }

  getAllVecinos(): void{
    this.sqlVecino.getAllVecinos().subscribe(
      (data: VecinoInterface[]) => {
        this.vecinos = data;
      }
    )
  }

  editVecino(vecino: VecinoInterface): void{
    this.vecinoPadre.next(vecino);
    this.parentMessage = true;
    this.vecinoEdit = vecino;
  }

}
