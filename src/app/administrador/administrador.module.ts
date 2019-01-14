import { NgModule } from "@angular/core";
import { AdministradorRoutingModule } from "./administrador-routing.module";
import { InicioComponent } from "./inicio/inicio.component";
import { HeaderAdminComponent } from "./header-admin/header-admin.component";

@NgModule({
  declarations: [InicioComponent, HeaderAdminComponent],
  imports: [AdministradorRoutingModule],
  exports: [HeaderAdminComponent]
})
export class AdministradorModule {}
