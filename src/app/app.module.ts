import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth-components/login/login.component';
import { LogoutComponent } from './auth-components/logout/logout.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorModule } from './administrador/administrador.module';
import { HeaderNotloggedComponent } from './header/header-notlogged/header-notlogged.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginService } from './service/login/login.service';
import { AuthAdmin } from './service/login/auth.service';
import { RouterModule } from '@angular/router';
import { IncidenciaService } from './service/incidencia/incidencia.service';
import { TareaService } from './service/tarea/tarea.service';
import { ServiceModule } from './service/service.module';
import { IncidenciaPipePipe } from './pipes/incidencia-pipe.pipe';
import { FormsModule } from '../../node_modules/@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdministradorComponent,
    HeaderNotloggedComponent,
    PagenotfoundComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AdministradorModule,
    ServiceModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
