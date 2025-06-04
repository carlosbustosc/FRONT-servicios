import { Component, OnInit } from '@angular/core';


//import location
import { Location } from '@angular/common';


//recibir parametro
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-ver-servicios',
  templateUrl: './ver-servicios.component.html',
  styleUrls: ['./ver-servicios.component.css']
})
export class VerServiciosComponent implements OnInit {
  
  
  correo:string = ""; 
  categoria:string = ""
  subcategoria:string = ""
  telefono:string = ""
  ciudad:string = ""

  constructor( private volverPantallaAnterior: Location, private recibirPrametro: ActivatedRoute ){

    
  }

  ngOnInit(): void {
    
    this.recibirPrametro.queryParams
      .subscribe( resp => {
          
          this.correo       = resp['Email'];
          this.categoria    = resp['categoria']
          this.subcategoria = resp['subcategoria']
          this.telefono     = resp['telefono']
          this.ciudad       = resp['ciudad']

          console.log(this.correo)
          console.log(this.categoria)
          console.log(this.subcategoria)
          console.log(this.telefono)
          console.log(this.ciudad)


      })

  }

  volverPantalla(){

    this.volverPantallaAnterior.back()

  }

}
