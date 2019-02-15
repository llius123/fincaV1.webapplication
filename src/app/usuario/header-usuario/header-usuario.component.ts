import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.css']
})
export class HeaderUsuarioComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.login.logout();
    this.router.navigate(['login'])
  }

}
