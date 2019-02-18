import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import * as anime from 'src/assets/anime.min.js';
@Component({
  selector: 'app-lateral-izquierdo',
  templateUrl: './lateral-izquierdo.component.html',
  styleUrls: ['./lateral-izquierdo.component.css']
})
export class LateralIzquierdoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lastPicked: string;

  navegar(data: string): void {
    this.router.navigateByUrl(`admin/mantenimiento/${data}`);
  }

  clicked(target: string) {
    console.log(target, this.lastPicked)
    anime.timeline({
      targets: `.${this.lastPicked}`,
      translateX: 0,
      color: '#000000'
    }).add({
      targets: `.titulo_${this.lastPicked}`,
      color: '#9E4F6E'
    });;
    anime.timeline({
      targets: `.${target}`,
      translateX: 10,
      color: '#9E4F6E'
    }).add({
      targets: `.titulo_${target}`,
      color: '#000000'
    });
    this.lastPicked = target;
  }

  animationEnter(target: string) {
    anime({
      targets: `${target}`,
      translateX: 10
    });
  }
  animationEnd(target: string) {
    anime({
      targets: `${target}`,
      translateX: 0
    });
  }
}
