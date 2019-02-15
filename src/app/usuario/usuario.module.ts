import { NgModule } from "@angular/core";
import { UsuarioComponent } from './usuario.component';
import { HeaderUsuarioComponent } from './header-usuario/header-usuario.component';
import { routes } from './usuario-routing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { ApplicationPipesModule } from '../pipes/pipes.module';

//PrimeNg
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [UsuarioComponent, HeaderUsuarioComponent, InicioComponent, FacturasComponent, PerfilComponent, IncidenciaComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule, ReactiveFormsModule,ChartModule,OverlayPanelModule,TooltipModule,ButtonModule,BlockUIModule, MessageModule, MessagesModule, ToastModule, ScrollPanelModule, DialogModule, ProgressSpinnerModule, CalendarModule, ApplicationPipesModule],
  exports: []
})
export class UsuarioModule { }
