import { AuthAdmin } from './../service/login/auth.service';
import { AdministradorComponent } from "./administrador.component";
import { InicioComponent } from "./inicio/inicio.component";
import { Routes } from '@angular/router';
import { MantenimientoTablasComponent } from './mantenimiento-tablas/mantenimiento-tablas.component';
import { GestionComponent } from './gestion/gestion.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';

//Imports mantenimineto-tablas
import { InicioComponent as InicioComponentMantenimiento } from './mantenimiento-tablas/inicio/inicio.component';
import { VecinoComponent as VecinoComponentMantenimiento } from './mantenimiento-tablas/vecino/vecino.component';
import { ComunidadComponent as ComunidadComponentMantenimiento } from './mantenimiento-tablas/comunidad/comunidad.component';
import { ProveedorComponent as ProveedorComponentMantenimiento } from './mantenimiento-tablas/proveedor/proveedor.component';
import { TipofacturaComponent as TipofacturaComponentMantenimiento } from './mantenimiento-tablas/tipofactura/tipofactura.component';
import { PoblacionProvinciaComponent as PoblacionProvinciaComponentMantenimiento } from './mantenimiento-tablas/poblacion-provincia/poblacion-provincia.component';

export const routes: Routes = [
  {
    path: "admin",
    component: AdministradorComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent,
        canLoad: [AuthAdmin],
        data: { id: 1 }
      },
      {
        path: "mantenimiento",
        component: MantenimientoTablasComponent,
        children: [
          {
            path: "inicio",
            component: InicioComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "vecino",
            component: VecinoComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "comunidad",
            component: ComunidadComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "proveedor",
            component: ProveedorComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "tipofactura",
            component: TipofacturaComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "poblacion-provincia",
            component: PoblacionProvinciaComponentMantenimiento,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          }
        ],
        canLoad: [AuthAdmin],
        data: { id: 1 }
      },
      {
        path: "gestion",
        component: GestionComponent,
        canLoad: [AuthAdmin],
        data: { id: 1 }
      },
      {
        path: "incidencia",
        component: IncidenciaComponent,
        canLoad: [AuthAdmin],
        data: { id: 1 }
      }
    ],
    canActivate: [AuthAdmin],
    data: { id: 1 }
  }
];