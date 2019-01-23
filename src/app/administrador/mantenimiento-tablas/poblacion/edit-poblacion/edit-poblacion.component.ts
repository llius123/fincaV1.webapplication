import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-poblacion',
  templateUrl: './edit-poblacion.component.html',
  styleUrls: ['./edit-poblacion.component.css']
})
export class EditPoblacionComponent implements OnInit {

  @Input() seleccionado: boolean;
  @Input() hijo: Subject<PoblacionInterface>;
  formularioVecino: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
