import { Component } from '@angular/core';

//importar Router
import { Router } from '@angular/router';



@Component({
  selector: 'app-busco-servicios',
  templateUrl: './busco-servicios.component.html',
  styleUrls: ['./busco-servicios.component.css']
})
export class BuscoServiciosComponent {


  constructor( private usarRuta: Router){

  }

  verPerfilPadre(){
    alert("Aqui veras el perfil")
  }



  verServiciosPadre( numero:any){
    console.log(numero);
    
    window.scrollTo(0, 0);
    this.usarRuta.navigate(['/verServicios', numero])
  }


}
