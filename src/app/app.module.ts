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
    BrowserAnimationsModule,
    AdministradorModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, AuthAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
