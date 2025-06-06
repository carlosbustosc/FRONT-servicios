import { Component } from '@angular/core';
import { Location } from '@angular/common';


//conectar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service'; 


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})


export class LoginClienteComponent {
  
  usuarioCliente = "Clientes"
  imagenFondoClientes = '../../../assets/img/busco_servicios.jpg'
  

  constructor( private volver:Location, private conectarServicios:ServiciosService ){

  }


  
  datosFormulario( event: { email:any, pass:any }){
      
    console.log( event.email )
    console.log( event.pass )

    //conectar servicio
    this.conectarServicios.loginClientes( event.email, event.pass )
        .subscribe( resp => {
          console.log(resp)
        })


  }
      


  volverPantalla(){
    
    this.volver.back()
  }

}
