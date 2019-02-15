import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthAdmin } from '../service/login/auth.service';
import { IncidenciaComponent } from './incidencia/incidencia.component';

export const routes: Routes = [

    {
        path: "usuario",
        component: UsuarioComponent,
        children: [
            {
                path: "inicio",
                component: InicioComponent,
                canLoad: [AuthAdmin],
                data: { id: 2 }
            },
            {
                path: "facturas",
                component: FacturasComponent,
                canLoad: [AuthAdmin],
                data: { id: 2 }
            },
            {
                path: "perfil",
                component: PerfilComponent,
                canLoad: [AuthAdmin],
                data: { id: 2 }
            },
            {
                path: "incidencia",
                component: IncidenciaComponent,
                canLoad: [AuthAdmin],
                data: { id: 2}
            }
        ],
        canActivate: [AuthAdmin],
        data: { id: 2 }
    }
];