import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PoblacionService } from 'src/app/service/poblacion-provincia/poblacion.service';

@Component({
  selector: 'app-poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css']
})
export class PoblacionComponent implements OnInit {

  constructor(private sql: PoblacionService) { }

  poblaciones: PoblacionInterface[];
  parentMessage = false;
  padre: Subject<PoblacionInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.sql.getAllPoblacion().subscribe(
      data => this.poblaciones = data,
      error => console.log(error.msg)
    )
  }

  edit(data: PoblacionInterface): void {
    this.padre.next(data);
    this.parentMessage = true;
  }
}
