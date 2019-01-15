import { NgModule } from "@angular/core";
import { InicioComponent } from "./inicio/inicio.component";
import { HeaderAdminComponent } from "./header-admin/header-admin.component";
import { RouterModule } from '@angular/router';
import { routes } from './administrador-routing';

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule {}
