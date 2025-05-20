import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//importar modulos
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscoServiciosComponent } from './paginas/busco-servicios/busco-servicios.component';

const routes: Routes = [

  { path:"inicio",     component:InicioComponent },
  { path:"servicios",  component:BuscoServiciosComponent},
  { path:"**", pathMatch:"full", redirectTo:"servicios"}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
