import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-lateral-izquierdo',
  templateUrl: './lateral-izquierdo.component.html',
  styleUrls: ['./lateral-izquierdo.component.css']
})
export class LateralIzquierdoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar(data: string): void{
    this.router.navigateByUrl(`admin/mantenimiento/${data}`);
  }
}
