import { AdministradorComponent } from "./administrador.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AuthAdmin } from '../service/login/auth.service';
import { Routes } from '@angular/router';
import { MantenimientoTablasComponent } from './mantenimiento-tablas/mantenimiento-tablas.component';
import { GestionComponent } from './gestion/gestion.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';

export const routes: Routes = [
  {
    path: "admin",
    component: AdministradorComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent,
        canLoad: [AuthAdmin]
      },
      {
        path: "mantenimiento",
        component: MantenimientoTablasComponent,
        canLoad: [AuthAdmin]
      },
      {
        path: "gestion",
        component: GestionComponent,
        canLoad: [AuthAdmin]
      },
      {
        path: "incidencia",
        component: IncidenciaComponent,
        canLoad: [AuthAdmin]
      }
    ],
    canActivate: [AuthAdmin]
  }
];