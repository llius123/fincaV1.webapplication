import { LogoutComponent } from './auth/logout/logout.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},  
  { path: 'administradorcomponentes', loadChildren: './administrador/administrador.module#AdministradorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
