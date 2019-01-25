import { Component, OnInit } from '@angular/core';
import { ComunidadService } from 'src/app/service/comunidad/comunidad.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  constructor(private comunidadService: ComunidadService) { }

  comunidades: ComunidadInterface[];

  parentMessage = false;
  comunidadEdit: ComunidadInterface = null;

  ngOnInit() {
    this.getAllComunidades();
  }

  getAllComunidades(): void{
    this.comunidadService.getAll().subscribe(
      (data: ComunidadInterface[]) => {
        this.comunidades = data;
      }
    )
  }

  comunidadPadre: Subject<ComunidadInterface> = new Subject();
  editComunidad(data: ComunidadInterface): void{
    this.comunidadPadre.next(data);
    this.parentMessage = true;
    this.comunidadEdit = data;
  }

}
