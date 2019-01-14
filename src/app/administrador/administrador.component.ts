import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.check().subscribe((vecino: VecinoBean) => {
      this.loginService.setLoggedUser(vecino);
    })
  }

}
