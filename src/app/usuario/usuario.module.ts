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



@NgModule({
  declarations: [UsuarioComponent, HeaderUsuarioComponent, InicioComponent, FacturasComponent, PerfilComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule, ReactiveFormsModule],
  exports: []
})
export class UsuarioModule { }