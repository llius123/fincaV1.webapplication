import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [

    {
        path: "usuario",
        component: UsuarioComponent,
        children: [
            {
                path: "inicio",
                component: InicioComponent
            }
        ]
    }
];