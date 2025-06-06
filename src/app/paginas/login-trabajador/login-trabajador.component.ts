import { Component } from '@angular/core';
import { Location } from '@angular/common';


//conectar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service'; 


@Component({
  selector: 'app-login-trabajador',
  templateUrl: './login-trabajador.component.html',
  styleUrls: ['./login-trabajador.component.css']
})
export class LoginTrabajadorComponent {
  
  usuarioTrabajador = "Trabajador"
  imagenPadre = '../../../assets/img/ofresco_servicios.jpg'
  
  constructor( private volver:Location, private conectarServicios:ServiciosService ){

  }



    
  datosTrabajador( event: { email:any, pass:any } ){
  
      let email =  event.email
      let pass  =  event.pass  

      
      this.conectarServicios.loginTrabajador( email, pass)
          .subscribe( resp => {
            console.log(resp)
          })
  }


  volverPantalla(){
    
    this.volver.back();
  }


}


