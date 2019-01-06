import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(login: string,pass: string){
    this.loginService.login(login, pass).subscribe((vecino: VecinoBean) => console.log(vecino.id));
  }

}
