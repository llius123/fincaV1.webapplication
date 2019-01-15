import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
