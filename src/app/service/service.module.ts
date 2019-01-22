import { AuthAdmin } from './login/auth.service';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { IncidenciaService } from './incidencia/incidencia.service';
import { TareaService } from './tarea/tarea.service';
import { GeneralService } from './general/general.service';
import { VecinoService } from './vecino/vecino.service';
import { ComunidadService } from './comunidad/comunidad.service';
import { TipoVecinoService } from './tipovecino-tipofactura/tipovecino.service';
import { PoblacionProvinciaService } from './poblacion-provincia/poblacion.service';
import { SentryErrorHandle } from './error/error.service';
import { ProveedorService } from './proveedor/proveedor.service';
import { TipoFacturaService } from './tipovecino-tipofactura/tipofactura.service';
@NgModule({
  providers: [LoginService, AuthAdmin, IncidenciaService, TareaService, GeneralService, VecinoService, ComunidadService, TipoVecinoService, PoblacionProvinciaService, SentryErrorHandle, ProveedorService, TipoFacturaService],
})
export class ServiceModule { }