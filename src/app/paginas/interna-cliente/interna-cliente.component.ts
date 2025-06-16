import { Component } from '@angular/core';

//importar Form group
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-interna-cliente',
  templateUrl: './interna-cliente.component.html',
  styleUrls: ['./interna-cliente.component.css']
})
export class InternaClienteComponent {

    
    mostrarBtnResponder = true;
    mostrarCampoMensaje = false;

    ocultarMenu = false;

    formularioReAgendamiento:FormGroup
      
    constructor( private fb: FormBuilder ){
        
        this.formularioReAgendamiento = this.fb.group({

          departamento: "1",
          ciudad: "bogota",
          barrio: "perdomo",
          direccion: "KR 70D # 64 sur - 38",
          dia: "2023-06-10",
          hora: "14:54"

        })

    }
  

    ngOnInit(): void {
      
    }
    
    //validacones visuales
    get validarDepartamento(){
      
      return this.formularioReAgendamiento.controls['departamento'].invalid && this.formularioReAgendamiento.controls['departamento'].touched
    
    }

    get validarCiudad(){
      
      return this.formularioReAgendamiento.controls['ciudad'].invalid && this.formularioReAgendamiento.controls['ciudad'].touched

    }

    get validarBarrio(){
      
      return this.formularioReAgendamiento.controls['barrio'].invalid && this.formularioReAgendamiento.controls['barrio'].touched

    }

    get validarDireccion(){
      
      return this.formularioReAgendamiento.controls['direccion'].invalid && this.formularioReAgendamiento.controls['direccion'].touched

    }

    get validarDia(){
      
      return this.formularioReAgendamiento.controls['dia'].invalid && this.formularioReAgendamiento.controls['dia'].touched

    }

    get validarHora(){
      
      return this.formularioReAgendamiento.controls['hora'].invalid && this.formularioReAgendamiento.controls['hora'].touched

    }
    


    ReAgendarServicio(){
      
      console.log(this.formularioReAgendamiento)

    }


    responderMensaje(){

        this.mostrarBtnResponder = false;
        this.mostrarCampoMensaje = true;

    }
}
