import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private login: LoginService) { }

  usuario: VecinoInterface;
  formularioPerfil: FormGroup;

  ngOnInit() {
    this.usuario = this.login.vecino;
    // this.formularioPerfil = new FormGroup({
    //   id: new FormControl()
    // })
  }

}
