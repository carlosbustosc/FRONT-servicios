import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  constructor(){

  }
  
  
  @Output() verPerfilHijo     = new EventEmitter;
  @Output() verServiciosHijo  = new EventEmitter;



  verPerfil(){
    
    this.verPerfilHijo.emit();
  }


  verServicios( numero:any ){
    
    this.verServiciosHijo.emit( numero );
  
  }

}
