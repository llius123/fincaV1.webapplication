import { AuthAdmin } from './login/auth.service';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { IncidenciaService } from './incidencia/incidencia.service';
import { TareaService } from './tarea/tarea.service';
@NgModule({
    providers: [LoginService, AuthAdmin, IncidenciaService,  TareaService],
  })
  export class ServiceModule { }