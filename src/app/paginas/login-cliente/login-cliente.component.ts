import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})


export class LoginClienteComponent {
  
  usuarioCliente = "Clientes"
  imagenFondoClientes = '../../../assets/img/busco_servicios.jpg'
  
  constructor( private volver:Location ){

  }

  volverPantalla(){
    
    this.volver.back()
  }

}
