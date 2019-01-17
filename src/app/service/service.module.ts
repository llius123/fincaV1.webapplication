import { AuthAdmin } from './login/auth.service';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { IncidenciaService } from './incidencia/incidencia.service';
import { TareaService } from './tarea/tarea.service';
import { FechaService } from './general/dates.service';
@NgModule({
    providers: [LoginService, AuthAdmin, IncidenciaService,  TareaService, FechaService],
  })
  export class ServiceModule { }