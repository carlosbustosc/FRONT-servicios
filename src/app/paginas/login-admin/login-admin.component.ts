import { Component } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  
  usuarioADMIN ="Adminstrador"
  imagenAdmin = '../../../assets/img/busco_servicios.jpg'
  
  constructor( private volver:Location ){

  }
  
  volverPantalla(){
    
    this.volver.back()
  }
}
