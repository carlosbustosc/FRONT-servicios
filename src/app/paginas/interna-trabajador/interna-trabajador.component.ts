import { Component } from '@angular/core';

@Component({
  selector: 'app-interna-trabajador',
  templateUrl: './interna-trabajador.component.html',
  styleUrls: ['./interna-trabajador.component.css']
})



export class InternaTrabajadorComponent {
    
  
    ocultarMenu:boolean = false;


    mostrarBtnResponder:boolean = true
    mostrarCampoMensaje:boolean = false



    
    constructor(){
      
    }
    

    ngOnInit(): void {
     
      
    }


    responderMensaje(){
      

      this.mostrarBtnResponder = false;
      this.mostrarCampoMensaje = true
    }  


    

  }



