import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AdministradorComponent } from './administrador.component';

const routes: Routes = [
    { path: 'administrador', component: AdministradorComponent, children: [
        // {path: '', component: AdministradorComponent}
        
      ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {}
