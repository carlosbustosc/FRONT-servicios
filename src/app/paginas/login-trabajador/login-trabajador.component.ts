import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-login-trabajador',
  templateUrl: './login-trabajador.component.html',
  styleUrls: ['./login-trabajador.component.css']
})
export class LoginTrabajadorComponent {
  
  usuarioTrabajador = "Trabajador"
  imagenPadre = '../../../assets/img/ofresco_servicios.jpg'
  
  constructor( private volver:Location ){}


  volverPantalla(){
    
    this.volver.back();
  }


}


