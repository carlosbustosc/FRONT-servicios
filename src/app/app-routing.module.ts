import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//importar modulos
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscoServiciosComponent } from './paginas/busco-servicios/busco-servicios.component';
import { VerServiciosComponent } from './paginas/ver-servicios/ver-servicios.component';
import { LoginClienteComponent } from './paginas/login-cliente/login-cliente.component';
import { LoginTrabajadorComponent } from './paginas/login-trabajador/login-trabajador.component';
import { LoginAdminComponent } from './paginas/login-admin/login-admin.component';
import { RegistrarTrabajadorComponent } from './paginas/registrar-trabajador/registrar-trabajador.component';
import { RegistrarClienteComponent } from './paginas/registrar-cliente/registrar-cliente.component';

const routes: Routes = [

  { path:"inicio",          component:InicioComponent },
  { path:"servicios",       component:BuscoServiciosComponent},
  { path:"verServicios/:id",    component:VerServiciosComponent },
  { path:"loginCliente",    component: LoginClienteComponent },
  { path:"loginTrabajador", component: LoginTrabajadorComponent },
  { path:"loginAdmin",      component:LoginAdminComponent},
  { path:"RegistrarTrabajador", component:RegistrarTrabajadorComponent },
  { path:"registrarCliente", component:RegistrarClienteComponent },
  { path:"**", pathMatch:"full", redirectTo:"RegistrarTrabajador"}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
