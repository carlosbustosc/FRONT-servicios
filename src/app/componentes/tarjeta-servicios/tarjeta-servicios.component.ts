import { Component, EventEmitter, Input, Output} from '@angular/core';

//usar formGroup
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-servicios',
  templateUrl: './tarjeta-servicios.component.html',
  styleUrls: ['./tarjeta-servicios.component.css']
})


export class TarjetaServiciosComponent{

  
  ocultarHoras:boolean = false;



  @Input() serviciosTrabajador:any = [];
  
  //enviar al padre
  @Output() tipoServicioSolicitado = new EventEmitter()

  


  

  tipoServicio( value:any, texto:any, nombreServicio:any){
    
    this.tipoServicioSolicitado.emit( { value, texto, nombreServicio } );

    //console.log(value)
    //console.log(texto)
 
  }

  
}
