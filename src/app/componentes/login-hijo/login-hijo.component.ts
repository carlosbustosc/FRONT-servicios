import { Component, EventEmitter, Input, Output } from '@angular/core';


//importar formGroup
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-hijo',
  templateUrl: './login-hijo.component.html',
  styleUrls: ['./login-hijo.component.css']
})


export class LoginComponent {
  
  @Input() usuarioHijo:any
  @Input() imagenHijo:any
  
  
  @Output() clickHijo = new EventEmitter;
  @Output() datosFormulario = new EventEmitter
  
  

  datosLogin:FormGroup

  constructor( private fb:FormBuilder ){
    
    this.datosLogin = this.fb.group({
      email:  ["", Validators.required ],
      pass :  ["", Validators.required ]
    })
    
  }
  
  // validaciones visuales
  get validarEmail(){
    
    return this.datosLogin.controls['email'].invalid && this.datosLogin.controls['email'].touched
  }

  get validarPass(){
  
    return this.datosLogin.controls['pass'].invalid && this.datosLogin.controls['pass'].touched
  }
  

  
  enviaDatosLogin(){
      
 

    if( this.datosLogin.invalid ){
      
      Object.values( this.datosLogin.controls ).forEach( campos => {

        campos.markAsTouched()

      })
    }else{

      let email =  this.datosLogin.value.email 
      let pass =   this.datosLogin.value.pass 
      
      //emitimos evento
      this.datosFormulario.emit( { email,  pass} )

    }
  }






  volverPantalla(){
    
    this.clickHijo.emit()

  }

}
