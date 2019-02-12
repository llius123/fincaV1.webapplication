import { NgModule } from "@angular/core";
import { UsuarioComponent } from './usuario.component';
import { HeaderUsuarioComponent } from './header-usuario/header-usuario.component';
import { routes } from './usuario-routing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [UsuarioComponent, HeaderUsuarioComponent, InicioComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule,],
  exports: []
})
export class UsuarioModule { }
