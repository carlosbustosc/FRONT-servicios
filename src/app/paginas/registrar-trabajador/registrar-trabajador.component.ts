import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


//importar formGroup
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


//conectar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-registrar-trabajador',
  templateUrl: './registrar-trabajador.component.html',
  styleUrls: ['./registrar-trabajador.component.css']
})
export class RegistrarTrabajadorComponent implements OnInit {
  
  edades: number[] = [];

  formRegistrarTrabajador:FormGroup

  constructor( private volver:Location, private fb:FormBuilder, private conectarServicios:ServiciosService ){
    
    this.formRegistrarTrabajador = this.fb.group({

      nombre:        ["", Validators.required ],
      edad:          ["", Validators.required ],
      documento:     ["", Validators.required ],
      genero:        ["", Validators.required ],
      departamento:  ["", Validators.required ],
      ciudad:        ["", Validators.required ],
      tipoSangre:    ["", Validators.required ],
      fotoPersona:   ["", Validators.required ],
      HV:            ["", Validators.required ],
      antecedentes:  ["", Validators.required ],
      telefono:      ["", Validators.required ],
      email:         ["", Validators.required ],
      pass:          ["", Validators.required ],
      EPS:           ["", Validators.required ],
      telEmergencia: ["", Validators.required ],
      categoria:     ["", Validators.required ],
      subcategoria:     ["", Validators.required ]

    })

  }




  //Validaciones visuales
      get nombreValidarCampo(){
        return this.formRegistrarTrabajador.controls['nombre'].invalid && this.formRegistrarTrabajador.controls['nombre'].touched
      }
      get edadValidarCampo(){
        return this.formRegistrarTrabajador.controls['edad'].invalid && this.formRegistrarTrabajador.controls['edad'].touched
      }
      get documentoValidarCampo(){
        return this.formRegistrarTrabajador.controls['documento'].invalid && this.formRegistrarTrabajador.controls['documento'].touched
      }
      get generoValidarCampo(){
        return this.formRegistrarTrabajador.controls['genero'].invalid && this.formRegistrarTrabajador.controls['genero'].touched
      }
      get departamentoValidarCampo(){
        return this.formRegistrarTrabajador.controls['departamento'].invalid && this.formRegistrarTrabajador.controls['departamento'].touched
      }
      get ciudadValidarCampo(){
        return this.formRegistrarTrabajador.controls['ciudad'].invalid && this.formRegistrarTrabajador.controls['ciudad'].touched
      }
      get tipoSangreValidarCampo(){
        return this.formRegistrarTrabajador.controls['tipoSangre'].invalid && this.formRegistrarTrabajador.controls['tipoSangre'].touched
      }
      get fotoPersonaValidarCampo(){
        return this.formRegistrarTrabajador.controls['fotoPersona'].invalid && this.formRegistrarTrabajador.controls['fotoPersona'].touched
      }
      get HVValidarCampo(){
        return this.formRegistrarTrabajador.controls['HV'].invalid && this.formRegistrarTrabajador.controls['HV'].touched
      }
      get antecedentesValidarCampo(){
        return this.formRegistrarTrabajador.controls['antecedentes'].invalid && this.formRegistrarTrabajador.controls['antecedentes'].touched
      }
      get telefonoValidarCampo(){
        return this.formRegistrarTrabajador.controls['telefono'].invalid && this.formRegistrarTrabajador.controls['telefono'].touched
      }
      get emailValidarCampo(){
        return this.formRegistrarTrabajador.controls['email'].invalid && this.formRegistrarTrabajador.controls['email'].touched
      }
      get passValidarCampo(){
        return this.formRegistrarTrabajador.controls['pass'].invalid && this.formRegistrarTrabajador.controls['pass'].touched
      }
      get EPSValidarCampo(){
        return this.formRegistrarTrabajador.controls['EPS'].invalid && this.formRegistrarTrabajador.controls['EPS'].touched
      }
      get telEmergenciaValidarCampo(){
        return this.formRegistrarTrabajador.controls['telEmergencia'].invalid && this.formRegistrarTrabajador.controls['telEmergencia'].touched
      }

      get ValidarCategoria(){
        return this.formRegistrarTrabajador.controls['categoria'].invalid && this.formRegistrarTrabajador.controls['categoria'].touched
      }

      get ValidarSubcategoria(){
        return this.formRegistrarTrabajador.controls['subcategoria'].invalid && this.formRegistrarTrabajador.controls['subcategoria'].touched
      }




  ngOnInit(): void {
    
     this.edades = Array.from( { length:100 }, ( _, i ) => i );
  }
  


  registrarTrabajador(){
    
    if( this.formRegistrarTrabajador.invalid ){

      Object.values( this.formRegistrarTrabajador.controls ).forEach( campos => {
        
        campos.markAsTouched()

      })

    }else{

      this.conectarServicios.RegistrarTrabajador( this.formRegistrarTrabajador.value )

    }

  }


  volverPantalla(){
  
    this.volver.back();

  }

}
