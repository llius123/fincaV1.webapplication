import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private login: LoginService) { }

  vecino_nombre:  string;
  countIncidencias: number;
  countTareas: number;

  ngOnInit() {
    this.vecino_nombre = this.login.vecino.nombre;
    setTimeout(() => {
      // this.countIncidencias = this.login.countIncidencias;
      // this.countTareas = this.login.countTareas;
    }, 3000);
  }
}
