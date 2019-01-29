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
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MessagesModule} from 'primeng/messages';
import { MessageModule} from 'primeng/message';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';

//mantenimiento-tablas
import { InicioComponent as InicioComponentMentenimiento } from './mantenimiento-tablas/inicio/inicio.component';
import { VecinoComponent } from './mantenimiento-tablas/vecino/vecino.component';
import { ComunidadComponent } from './mantenimiento-tablas/comunidad/comunidad.component';
import { ProveedorComponent } from './mantenimiento-tablas/proveedor/proveedor.component';
import { TipofacturaComponent } from './mantenimiento-tablas/tipofactura/tipofactura.component';
import { LateralIzquierdoComponent } from './mantenimiento-tablas/lateral-izquierdo/lateral-izquierdo.component';
import { EditVecinoComponent } from './mantenimiento-tablas/vecino/edit-vecino/edit-vecino.component';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { EditComunidadComponent } from './mantenimiento-tablas/comunidad/edit-comunidad/edit-comunidad.component';
import { EditProveedorComponent } from './mantenimiento-tablas/proveedor/edit-proveedor/edit-proveedor.component';
import { TipovecinoComponent } from './mantenimiento-tablas/tipovecino/tipovecino.component';
import { PoblacionComponent } from './mantenimiento-tablas/poblacion/poblacion.component';
import { ProvinciaComponent } from './mantenimiento-tablas/provincia/provincia.component';
import { EditTipovecinoComponent } from './mantenimiento-tablas/tipovecino/edit-tipovecino/edit-tipovecino.component';
import { EditTipofacturaComponent } from './mantenimiento-tablas/tipofactura/edit-tipofactura/edit-tipofactura.component';
import { EditProvinciaComponent } from './mantenimiento-tablas/provincia/edit-provincia/edit-provincia.component';
import { EditPoblacionComponent } from './mantenimiento-tablas/poblacion/edit-poblacion/edit-poblacion.component';
import { NewVecinoComponent } from './mantenimiento-tablas/vecino/new-vecino/new-vecino.component';
import { BusquedaNombrePipe } from '../pipes/busqueda-nombre-pipe.pipe';
import { NewTipovecinoComponent } from './mantenimiento-tablas/tipovecino/new-tipovecino/new-tipovecino.component';
import { NewTipofacturaComponent } from './mantenimiento-tablas/tipofactura/new-tipofactura/new-tipofactura.component';
import { NewProvinciaComponent } from './mantenimiento-tablas/provincia/new-provincia/new-provincia.component';
import { NewPoblacionComponent } from './mantenimiento-tablas/poblacion/new-poblacion/new-poblacion.component';
import { NewProveedorComponent } from './mantenimiento-tablas/proveedor/new-proveedor/new-proveedor.component';
import { NewComunidadComponent } from './mantenimiento-tablas/comunidad/new-comunidad/new-comunidad.component';
import { NewFacturaComponent } from './gestion/new-factura/new-factura.component';
import { ListadoComponent } from './gestion/listado/listado.component';

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent, MantenimientoTablasComponent, GestionComponent, IncidenciaComponent, TareasComponent, IncidenciasComponent, IncidenciaPipePipe, FechaPipePipe, VecinoComponent, ComunidadComponent, ProveedorComponent, TipofacturaComponent, LateralIzquierdoComponent, InicioComponentMentenimiento, EditVecinoComponent, EditComunidadComponent, EditProveedorComponent, TipovecinoComponent, PoblacionComponent, ProvinciaComponent, EditTipovecinoComponent, EditTipofacturaComponent, EditProvinciaComponent, EditPoblacionComponent, NewVecinoComponent, BusquedaNombrePipe, NewTipovecinoComponent, NewTipofacturaComponent, NewProvinciaComponent, NewPoblacionComponent, NewProveedorComponent, NewComunidadComponent, NewFacturaComponent, ListadoComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, MatProgressSpinnerModule, ProgressSpinnerModule, BlockUIModule, DialogModule, ButtonModule, ToastModule, ReactiveFormsModule, OverlayPanelModule, MessagesModule,MessageModule, FormsModule, ScrollPanelModule, TooltipModule, CalendarModule],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule { }
