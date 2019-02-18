import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import * as anime from 'src/assets/anime.min.js';

@Component({
  selector: 'app-header-usuario',
  templateUrl: './header-usuario.component.html',
  styleUrls: ['./header-usuario.component.css']
})
export class HeaderUsuarioComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
    anime({
      targets: '.header',
      translateX: 2500,
      duration: 1500,
      direction: 'reverse',
      easing: 'easeInOutSine'
    });
  }

  logout(){
    this.login.logout();
    this.router.navigate(['login'])
  }

  animationEnter(target: string){
    anime({
      targets: `${target}`,
      translateX: 10
    });
  }
  animationEnd(target: string){
    anime({
      targets: `${target}`,
      translateX: 0
    });
  }

}
