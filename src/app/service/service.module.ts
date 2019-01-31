import { AuthAdmin } from './login/auth.service';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { IncidenciaService } from './incidencia/incidencia.service';
import { TareaService } from './tarea/tarea.service';
import { GeneralService } from './general/general.service';
import { VecinoService } from './vecino/vecino.service';
import { ComunidadService } from './comunidad/comunidad.service';
import { TipoVecinoService } from './tipovecino-tipofactura/tipovecino.service';
import { PoblacionService } from './poblacion-provincia/poblacion.service';
import { ProveedorService } from './proveedor/proveedor.service';
import { TipoFacturaService } from './tipovecino-tipofactura/tipofactura.service';
import { ProvinciaService } from './poblacion-provincia/provincia.service';
import { FacturaService } from './factura/factura.service';
@NgModule({
  providers: [LoginService, AuthAdmin, IncidenciaService, TareaService, GeneralService, VecinoService, ComunidadService, TipoVecinoService, PoblacionService,ProvinciaService, ProveedorService, TipoFacturaService, FacturaService],
})
export class ServiceModule { }