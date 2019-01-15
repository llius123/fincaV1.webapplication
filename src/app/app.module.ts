import { AuthUsuario } from './service/login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorModule } from './administrador/administrador.module';
import { HeaderNotloggedComponent } from './header/header-notlogged/header-notlogged.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


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
    AppRoutingModule,
    BrowserAnimationsModule,
    AdministradorModule,
    HttpClientModule
  ],
  providers: [AuthUsuario],
  bootstrap: [AppComponent]
})
export class AppModule { }
