import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { HeaderAdminComponent } from "./header-admin/header-admin.component";
import { RouterModule } from '@angular/router';
import { routes } from './administrador-routing';
import { MantenimientoTablasComponent } from './mantenimiento-tablas/mantenimiento-tablas.component';
import { GestionComponent } from './gestion/gestion.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { TareasComponent } from './inicio/tareas/tareas.component';
import { IncidenciasComponent } from './inicio/incidencias/incidencias.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//https://www.primefaces.org/primeng
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { IncidenciaPipePipe } from '../pipes/incidencia-pipe.pipe';

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent, MantenimientoTablasComponent, GestionComponent, IncidenciaComponent, TareasComponent, IncidenciasComponent, IncidenciaPipePipe],
  imports: [RouterModule.forRoot(routes), BrowserModule, MatProgressSpinnerModule, ProgressSpinnerModule, BlockUIModule, DialogModule, ButtonModule, ToastModule],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule { }
