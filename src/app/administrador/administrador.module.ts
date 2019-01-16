import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { HeaderAdminComponent } from "./header-admin/header-admin.component";
import { RouterModule } from '@angular/router';
import { routes } from './administrador-routing';
import { MantenimientoTablasComponent } from './mantenimiento-tablas/mantenimiento-tablas.component';
import { GestionComponent } from './gestion/gestion.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent, MantenimientoTablasComponent, GestionComponent, IncidenciaComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule {}
