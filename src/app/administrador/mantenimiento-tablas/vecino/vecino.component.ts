import { Component, OnInit } from '@angular/core';
import { VecinoService } from '../../../service/vecino/vecino.service';
import { MessageService } from '../../../../../node_modules/primeng/components/common/messageservice';

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
    this.parentMessage = true;
    this.vecinoEdit = vecino;
  }
}
