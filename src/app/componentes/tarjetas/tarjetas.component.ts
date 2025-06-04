import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(){

  }
  
  
  @Input() informacionPerfil:any = [] //inbformacion que viene del padre
  

  
  @Output() verPerfilHijo     = new EventEmitter;
  @Output() verServiciosHijo  = new EventEmitter;




  ngOnInit(): void {
      console.log( this.informacionPerfil )
  }


  verPerfil( perfil:any ){
    
    this.verPerfilHijo.emit( perfil );
  }


  verServicios( correo:any ){
    
    this.verServiciosHijo.emit( correo );
  
  }

}
