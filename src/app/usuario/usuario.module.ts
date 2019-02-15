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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { IncidenciaComponent } from './incidencia/incidencia.component';


@NgModule({
  declarations: [UsuarioComponent, HeaderUsuarioComponent, InicioComponent, FacturasComponent, PerfilComponent, IncidenciaComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule, ReactiveFormsModule, MessageModule, MessagesModule, ToastModule],
  exports: []
})
export class UsuarioModule { }
