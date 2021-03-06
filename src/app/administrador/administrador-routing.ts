import { HelpComponent } from './help/help.component';
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
import { TipovecinoComponent } from './mantenimiento-tablas/tipovecino/tipovecino.component';
import { PoblacionComponent } from './mantenimiento-tablas/poblacion/poblacion.component';
import { ProvinciaComponent } from './mantenimiento-tablas/provincia/provincia.component';
import { NewFacturaComponent } from './gestion/new-factura/new-factura.component';
import { ListadoComponent } from './gestion/listado/listado.component';
import { EditFacturaComponent } from './gestion/edit-factura/edit-factura.component';
import { GraficoListadosComponent } from './gestion/grafico-listados/grafico-listados.component';

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
            path: "tipovecino",
            component: TipovecinoComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "poblacion",
            component: PoblacionComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "provincia",
            component: ProvinciaComponent,
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
        children: [
          {
            path: "nuevafactura",
            component: NewFacturaComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "listado",
            component: ListadoComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "editfactura/:id",
            component: EditFacturaComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          },
          {
            path: "grafico",
            component: GraficoListadosComponent,
            canLoad: [AuthAdmin],
            data: { id: 1 }
          }
        ],
        data: { id: 1 }
      },
      {
        path: "incidencia",
        component: IncidenciaComponent,
        canLoad: [AuthAdmin],
        data: { id: 1 }
      },
      {
        path: "help",
        component: HelpComponent,
        canLoad: [AuthAdmin],
        data: { id: 1 }
      }
    ],
    canActivate: [AuthAdmin],
    data: { id: 1 }
  }
];