import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';

@Component({
  selector: 'app-expand-texto',
  templateUrl: './expand-texto.component.html',
  styleUrls: ['./expand-texto.component.css']
})
export class ExpandTextoComponent {

  display_expandtexto: boolean = false;
  texto: string;
  constructor(private general: GeneralService) {
    general.moreTexto.subscribe(
      (data:any) => {
        this.texto = data.data
        this.display_expandtexto = data.display
        console.log(this.texto)
      }
      )
    }

    cerrar (){
      this.display_expandtexto = !this.display_expandtexto;
    }

}
