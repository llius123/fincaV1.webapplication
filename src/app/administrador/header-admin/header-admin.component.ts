import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { GeneralService } from '../../service/general/general.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private login: LoginService, private general: GeneralService) { 
    general.tareasEvent.subscribe(
      (data:number) =>{
        this.countTareas = data;
      }
    )
    general.incidenciasEvent.subscribe(
      (data:number) => {
        this.countIncidencias = data;
      }
    )
  }

  vecino_nombre:  string;
  countIncidencias: number;
  countTareas: number;

  ngOnInit() {
  }
}
