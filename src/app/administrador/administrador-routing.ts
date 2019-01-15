import { AdministradorComponent } from "./administrador.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AuthAdmin } from '../service/login/admin.service';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "admin",
    component: AdministradorComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent,
        canLoad: [AuthAdmin]
      }
    ],
    canActivate: [AuthAdmin]
  }
];