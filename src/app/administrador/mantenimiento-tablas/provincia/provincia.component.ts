import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProvinciaService } from 'src/app/service/poblacion-provincia/provincia.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  constructor(private sql: ProvinciaService) { }
  
  provincias: ProvinciaInterface[];
  
  parentMessage = false;
  padre: Subject<ProvinciaInterface> = new Subject();

  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.sql.getAll().subscribe(
      data => this.provincias = data,
      error => console.log(error)
    )
  }

  edit(provincia: ProvinciaInterface): void {
    this.padre.next(provincia);
    this.parentMessage = true;
  }

}
