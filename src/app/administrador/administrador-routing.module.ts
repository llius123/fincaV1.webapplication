import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdministradorComponent } from "./administrador.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AuthUsuario } from '../auth/auth.service';

const routes: Routes = [
  {
    path: "admin",
    component: AdministradorComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent,
        canActivate: [AuthUsuario]
      }
    ],
    canActivate: [AuthUsuario]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {}
