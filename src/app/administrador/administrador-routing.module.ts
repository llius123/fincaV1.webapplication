import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdministradorComponent } from "./administrador.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AuthUsuario } from '../service/login/auth.service';

const routes: Routes = [
  {
    path: "admin",
    component: AdministradorComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {}
