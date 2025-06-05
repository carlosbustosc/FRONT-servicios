import { Component, OnInit } from '@angular/core';


//import location
import { Location } from '@angular/common';


//recibir parametro
import { ActivatedRoute } from '@angular/router'


//conectar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service';

//taer formGroup
import { FormGroup, FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-ver-servicios',
  templateUrl: './ver-servicios.component.html',
  styleUrls: ['./ver-servicios.component.css']
})
export class VerServiciosComponent implements OnInit {
  
  Foto:string = ""
  nombre:string = ""
  correo:string = ""; 
  categoria:string = ""
  subcategoria:string = ""
  telefono:string = ""
  ciudad:string = ""


  total = 0


  serviciosDelTrabajador:any[]  = []

  serviciosSeleccionados:any[] = []
  
  guardarTodasLosDepartamentos:any[] = []

  guardarTodasLasCiudades:any[] = []


  mostrarTotal = false;
  

  formularioAgendamiento:FormGroup




  constructor( private volverPantallaAnterior: Location, 
               private recibirPrametro: ActivatedRoute, 
               private conectarServicios:ServiciosService, 
               private fb: FormBuilder){

      
        this.formularioAgendamiento = this.fb.group({

            departamento: ["",  Validators.required],
            ciudad:       ["",  Validators.required],
            barrio:       ["",  Validators.required],
            direccion:    ["",  Validators.required],
            dia:          ["",  Validators.required],
            hora:         ["",  Validators.required]


        })

  }

  ngOnInit(): void {
    
    this.recibirPrametro.queryParams
      .subscribe( resp => {
          
          this.Foto         = resp['foto'];
          this.nombre       = resp['Nombre']
          this.correo       = resp['Email'];
          this.categoria    = resp['categoria']
          this.subcategoria = resp['subcategoria']
          this.telefono     = resp['telefono']
          this.ciudad       = resp['ciudad']


      })


      //traer los servicos que ofrece el trabajdor
      this.conectarServicios.serviciosTrabajador(  this.correo, this.categoria  )
          .subscribe( (resp:any) => {

            this.serviciosDelTrabajador = resp.respServicios

            console.log(this.serviciosDelTrabajador)
          
          })


        //traer departamentos y cidades
        this.conectarServicios.getCiudades()
          .subscribe( (resp:any) => {

            this.guardarTodasLosDepartamentos = resp;
            

          })


  }
  
    

  //Validacion pantalla

  get ValidarDepartamento(){
        
    return this.formularioAgendamiento.controls['departamento'].invalid &&  this.formularioAgendamiento.controls['departamento'].touched
  }

  get ValidarCiudad(){
    
    return this.formularioAgendamiento.controls['ciudad'].invalid &&  this.formularioAgendamiento.controls['ciudad'].touched

  }

  get ValidarBarrio(){
    
    return this.formularioAgendamiento.controls['barrio'].invalid &&  this.formularioAgendamiento.controls['barrio'].touched

  }

  get ValidarDireccion(){
    
    return this.formularioAgendamiento.controls['direccion'].invalid &&  this.formularioAgendamiento.controls['direccion'].touched

  }

  get ValidarDia(){
      
    return this.formularioAgendamiento.controls['dia'].invalid &&  this.formularioAgendamiento.controls['dia'].touched

  }

  get ValidarHora(){
      
    return this.formularioAgendamiento.controls['hora'].invalid &&  this.formularioAgendamiento.controls['hora'].touched

  }



  //valores que viene del Hijo
  recibirTipoServicioSolicitado( event: { value:any, texto:any, nombreServicio:string } ){
      
    //console.log(event.value)
    //console.log(event.texto)
    //console.log(event.nombreServicio)
    

    this.serviciosSeleccionados.push(event)
    console.log(this.serviciosSeleccionados)


    //sacar el total de los precios
    this.total = this.serviciosSeleccionados.reduce((acc, curr) => acc + Number(curr.value), 0);
    
    //acc = empieza en 0 y va acumulando  
    //curr = numero del value

    //acc + curr

    //console.log(this.total)
    

    if( this.serviciosSeleccionados.length > 0 ){
      
        this.mostrarTotal = true;
    }
    

  }

  

  //seleccionar ciudad
  cargarCiudades( posicionDepartamento:any ){
    
    console.log(posicionDepartamento)
  

    this.guardarTodasLasCiudades = this.guardarTodasLosDepartamentos[posicionDepartamento].ciudades;
    //console.log( this.guardarTodasLasCiudades )
  
  }



  //agendar servicio
   AgendarServicio(){
    
    //validar servicios agendados
    if( this.serviciosSeleccionados.length == 0 ){

      alert("no hay servicios agendados, seleccione algun servicio para agendar")
    
    }
  

    //validar formulario
    else if( this.formularioAgendamiento.invalid ){
        
        Object.values( this.formularioAgendamiento.controls ).forEach( campos => {
         
          campos.markAsTouched();
        
        })

    }else{

        
        this.conectarServicios.agendarServicioDeUnTrabajador( this.serviciosSeleccionados, this.formularioAgendamiento)
            .subscribe( (resp:any) => {

              console.log(resp)

            }, (err => {
              console.log(err)
            }))

    }

   }



  volverPantalla(){

    this.volverPantallaAnterior.back()

  }

}
