import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general/general.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private router: Router, private general: GeneralService) { }

  ngOnInit() {
  }

  email(nombre, pass){
    this.general.email(nombre,pass)
  }

}
