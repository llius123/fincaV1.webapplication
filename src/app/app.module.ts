import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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
import { RouterModule } from '@angular/router';
import { ServiceModule } from './service/service.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HelpComponent } from './administrador/help/help.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { UsuarioModule } from './usuario/usuario.module';
import { FechaPipePipe } from './pipes/fecha-pipe.pipe';
import { ApplicationPipesModule } from './pipes/pipes.module';
import { ToastModule } from 'primeng/toast';
import {CaptchaModule} from 'primeng/captcha';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdministradorComponent,
    HeaderNotloggedComponent,
    PagenotfoundComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AdministradorModule,
    UsuarioModule,
    ServiceModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OverlayPanelModule,
    DialogModule,
    ToastModule,
    CaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
