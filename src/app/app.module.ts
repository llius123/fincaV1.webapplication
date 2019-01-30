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
import { SentryErrorHandle } from './service/error/error.service';
import { HelpComponent } from './administrador/help/help.component';




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
    ServiceModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandle }],
  bootstrap: [AppComponent]
})
export class AppModule { }
