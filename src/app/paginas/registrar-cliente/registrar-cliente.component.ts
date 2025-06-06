import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';



//conectar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service';


//importamos formGroup y fb
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {


  edades: number[] = [];

  guardarTodosLosDepartamentos:any[] = []
  guardarTodasCiudades = []


  //form
  registroClientes:FormGroup
  
  constructor( private volver:Location, private conectarServicios:ServiciosService, private fb:FormBuilder ){
    
      this.registroClientes = this.fb.group({

          nombre:       ["", Validators.required ],
          genero:       ["", Validators.required ],
          documento:    ["", Validators.required ],
          edad:         ["", Validators.required ],
          fotoPerfil:   ["", Validators.required ],
          telefono:     ["", Validators.required ],
          email:        ["", Validators.required ],
          pass:         ["", Validators.required ],
          departamento: ["", Validators.required ],
          ciudad:       ["", Validators.required ],
          direccion:    ["", Validators.required ],
          antecedentes: ["", Validators.required ]

      })
    
  }

  ngOnInit(): void {
  

    //cargar departamentos
    this.conectarServicios.getCiudades()
        .subscribe( (resp:any) => {

          this.guardarTodosLosDepartamentos = resp
          console.log(resp)
        
        })

    //cargar edades
     this.edades = Array.from( { length:100 }, ( _, i ) => i );
  }
    


  //validaciones visuales
          get ValidarNombre(){

              return this.registroClientes.controls['nombre'].invalid && this.registroClientes.controls['nombre'].touched;
          }      
          get ValidarGenero(){
              
            return this.registroClientes.controls['genero'].invalid && this.registroClientes.controls['genero'].touched;
            
          }

          get ValidarDocumento(){
            
            return this.registroClientes.controls['documento'].invalid && this.registroClientes.controls['documento'].touched;

          } 

          get ValidarEdad(){
            
            return this.registroClientes.controls['edad'].invalid && this.registroClientes.controls['edad'].touched;

          }   

          get ValidarFotoPerfil(){
              
            return this.registroClientes.controls['fotoPerfil'].invalid && this.registroClientes.controls['fotoPerfil'].touched;

          } 

          get ValidarTelefono(){
              
            return this.registroClientes.controls['telefono'].invalid && this.registroClientes.controls['telefono'].touched;

          }  

          get ValidarEmail(){
            
            return this.registroClientes.controls['email'].invalid && this.registroClientes.controls['email'].touched;

          } 

          get ValidarPass(){
              
            return this.registroClientes.controls['pass'].invalid && this.registroClientes.controls['pass'].touched;

          } 

          get ValidarDepartamento(){
            
            return this.registroClientes.controls['departamento'].invalid && this.registroClientes.controls['departamento'].touched;

          } 

          get ValidarCiudad(){
              
            return this.registroClientes.controls['ciudad'].invalid && this.registroClientes.controls['ciudad'].touched;

          }  

          get ValidarDireccion(){
              
            return this.registroClientes.controls['direccion'].invalid && this.registroClientes.controls['direccion'].touched;

          }  

          get ValidarAntecedentes(){
            
            return this.registroClientes.controls['antecedentes'].invalid && this.registroClientes.controls['antecedentes'].touched;

          }      

  



  obtenerCiudades( posicion:any ){

      this.guardarTodasCiudades = this.guardarTodosLosDepartamentos[posicion].ciudades;
  }



  registrarCliente(){  
      

    if( this.registroClientes.invalid ){
      
      Object.values( this.registroClientes.controls ).forEach( campos => {

        campos.markAsTouched();

      })
    
    }else{

      this.conectarServicios.registrarCliente( this.registroClientes.value )
        .subscribe( resp => {

          console.log(resp)
        
        })

    }


  }





  volverPantalla(){
    
    this.volver.back();
  
  }
    
}
