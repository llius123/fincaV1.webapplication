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
        canLoad: [AuthAdmin],
        data: { id: 1}
      },
      {
        path: "mantenimiento",
        component: MantenimientoTablasComponent,
        canLoad: [AuthAdmin],
        data: { id: 1}
      },
      {
        path: "gestion",
        component: GestionComponent,
        canLoad: [AuthAdmin],
        data: { id: 1}
      },
      {
        path: "incidencia",
        component: IncidenciaComponent,
        canLoad: [AuthAdmin],
        data: { id: 1}
      }
    ],
    canActivate: [AuthAdmin],
    data: { id: 1}
  }
];