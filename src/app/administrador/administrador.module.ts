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
import { FechaPipePipe } from '../pipes/fecha-pipe.pipe';

//mantenimiento-tablas
import { InicioComponent as InicioComponentMentenimiento } from './mantenimiento-tablas/inicio/inicio.component';
import { VecinoComponent } from './mantenimiento-tablas/vecino/vecino.component';
import { PoblacionProvinciaComponent } from './mantenimiento-tablas/poblacion-provincia/poblacion-provincia.component';
import { ComunidadComponent } from './mantenimiento-tablas/comunidad/comunidad.component';
import { ProveedorComponent } from './mantenimiento-tablas/proveedor/proveedor.component';
import { TipofacturaComponent } from './mantenimiento-tablas/tipofactura/tipofactura.component';
import { LateralIzquierdoComponent } from './mantenimiento-tablas/lateral-izquierdo/lateral-izquierdo.component';
import { EditVecinoComponent } from './mantenimiento-tablas/vecino/edit-vecino/edit-vecino.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { EditComunidadComponent } from './mantenimiento-tablas/comunidad/edit-comunidad/edit-comunidad.component';
import { EditProveedorComponent } from './mantenimiento-tablas/proveedor/edit-proveedor/edit-proveedor.component';

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent, MantenimientoTablasComponent, GestionComponent, IncidenciaComponent, TareasComponent, IncidenciasComponent, IncidenciaPipePipe, FechaPipePipe, VecinoComponent, PoblacionProvinciaComponent, ComunidadComponent, ProveedorComponent, TipofacturaComponent, LateralIzquierdoComponent, InicioComponentMentenimiento, EditVecinoComponent, EditComunidadComponent, EditProveedorComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, MatProgressSpinnerModule, ProgressSpinnerModule, BlockUIModule, DialogModule, ButtonModule, ToastModule,ReactiveFormsModule],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule { }
