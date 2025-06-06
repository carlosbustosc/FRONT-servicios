import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscoServiciosComponent } from './paginas/busco-servicios/busco-servicios.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { VerServiciosComponent } from './paginas/ver-servicios/ver-servicios.component';
import { TarjetaServiciosComponent } from './componentes/tarjeta-servicios/tarjeta-servicios.component';
import { LoginClienteComponent } from './paginas/login-cliente/login-cliente.component';
import { LoginComponent } from './componentes/login-hijo/login-hijo.component';
import { LoginTrabajadorComponent } from './paginas/login-trabajador/login-trabajador.component';
import { LoginAdminComponent } from './paginas/login-admin/login-admin.component';
import { RegistrarTrabajadorComponent } from './paginas/registrar-trabajador/registrar-trabajador.component';
import { RegistrarClienteComponent } from './paginas/registrar-cliente/registrar-cliente.component';

import { HttpClientModule } from '@angular/common/http'

//importar modulo formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    BuscoServiciosComponent,
    TarjetasComponent,
    VerServiciosComponent,
    TarjetaServiciosComponent,
    LoginClienteComponent,
    LoginComponent,
    LoginTrabajadorComponent,
    LoginAdminComponent,
    RegistrarTrabajadorComponent,
    RegistrarClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
