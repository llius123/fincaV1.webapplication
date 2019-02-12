import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [

    {
        path: "usuario",
        component: UsuarioComponent,
        children: [
            {
                path: "inicio",
                component: InicioComponent
            },
            {
                path: "facturas",
                component: FacturasComponent
            },
            {
                path: "perfil",
                component: PerfilComponent
            }
        ]
    }
];