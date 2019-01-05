import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorModule } from './administrador/administrador.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
