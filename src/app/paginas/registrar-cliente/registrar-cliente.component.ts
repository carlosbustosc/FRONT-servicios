import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {


  edades: number[] = [];
  
  constructor( private volver:Location ){

    
  }

  ngOnInit(): void {
    
     this.edades = Array.from( { length:100 }, ( _, i ) => i );
  }

  volverPantalla(){
    
    this.volver.back();
  
  }
    
}
