import { AuthAdmin } from './login/auth.service';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { IncidenciaService } from './incidencia/incidencia.service';
import { TareaService } from './tarea/tarea.service';
import { GeneralService } from './general/general.service';
import { VecinoService } from './vecino/vecino.service';
@NgModule({
    providers: [LoginService, AuthAdmin, IncidenciaService,  TareaService, GeneralService, VecinoService],
  })
  export class ServiceModule { }