import { NgModule } from "@angular/core";
import { BusquedaNombrePipe } from './busqueda-nombre-pipe.pipe';
import { FechaPipePipe } from './fecha-pipe.pipe';
import { IncidenciaPipePipe } from './incidencia-pipe.pipe';
import { RecorteTextoPipe } from './recorte-texto-pipe.pipe';

@NgModule({
    imports: [
        // dep modules
    ],
    declarations: [
        BusquedaNombrePipe,
        FechaPipePipe,
        IncidenciaPipePipe,
        RecorteTextoPipe
    ],
    exports: [
        BusquedaNombrePipe,
        FechaPipePipe,
        IncidenciaPipePipe,
        RecorteTextoPipe
    ]
})
export class ApplicationPipesModule { }