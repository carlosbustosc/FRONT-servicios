import { Component, OnInit } from '@angular/core';

//importar Router
import { Router } from '@angular/router';

//importar servicios
import { ServiciosService } from 'src/app/servicios/servicios.service';


//importar form group
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-busco-servicios',
  templateUrl: './busco-servicios.component.html',
  styleUrls: ['./busco-servicios.component.css']
})
export class BuscoServiciosComponent implements OnInit{


  departamentos:any= []; 
  ciudades:any = [];

  todosLosServicios:any = []
  todasLasSubcategorias:any = []

  categoriasUnicas: any[] = [];
  subCategoriasUnicas:any[] = []
  

  formularioBusqueda:FormGroup

  guardarTrabajadores:any[] = []


  perfilTrabajador:any = {}


  constructor( private fb:FormBuilder, private usarRuta: Router, private conectarServicios: ServiciosService){
  
      this.formularioBusqueda = this.fb.group({

        departamento: ["", Validators.required],
        ciudad:       ["", Validators.required],
        categoria:    ["", Validators.required],
        subcategoria: ["", Validators.required]

      })

  }




  ngOnInit(): void {
    
    // traer todas la ciudades
    this.conectarServicios.getCiudades()
        .subscribe( resp => {
           
          this.departamentos = resp;
          console.log(this.departamentos)
  
        })
      


        //traer todos los servicios 
        this.conectarServicios.getTodosServicios()
          .subscribe( (resp:any) => {
  
            this.todosLosServicios = resp.todosLosServicios;

            //obtener categorias unicas
            const guardarCategoriasUnicas = new Set( this.todosLosServicios.map( (servicio:any) => servicio.categoriaServicio ) );
            this.categoriasUnicas = Array.from(guardarCategoriasUnicas)

          })
  }

  
  //-----Validaciones visuales-------//
  get validarDepartamento(){
      
    return this.formularioBusqueda.controls['departamento'].invalid && this.formularioBusqueda.controls['departamento'].touched;
  
  }

  get validarCiudad(){
  
    return this.formularioBusqueda.controls['ciudad'].invalid && this.formularioBusqueda.controls['ciudad'].touched;
  }

  get validarCategoria(){
    
    return this.formularioBusqueda.controls['categoria'].invalid && this.formularioBusqueda.controls['categoria'].touched
  }

  get validarSubcategoria(){
  
    return this.formularioBusqueda.controls['subcategoria'].invalid && this.formularioBusqueda.controls['subcategoria'].touched;
  }






  buscarPersona(){

      if( this.formularioBusqueda.invalid ){

        
          Object.values( this.formularioBusqueda.controls ).forEach( campos => {
            
            campos.markAsTouched();
    
          })
      
      }else{
  
          //console.log( this.formularioBusqueda.value)

          this.conectarServicios.buscarTrabajador( this.formularioBusqueda.value )
              .subscribe( (resp:any) => {
                
          
    
                this.guardarTrabajadores = resp.respTrabajador;
                console.log(this.guardarTrabajadores)
              
              })

      }

  }



  valorDepartamento( posicion:any ){
  
    console.log(posicion)
    this.ciudades = this.departamentos[posicion].ciudades  //seleccionar ciudades
  }


  
  //obtener primer categoria para llamar la segunda
  obtenerPrimerCategoria( categoria1:any){

        //console.log(categoria1)
        this.conectarServicios.getSubcategoria( categoria1 )

          .subscribe( (resp:any) => {

              this.todasLasSubcategorias = resp.respSubcategoria;
              console.log( this.todasLasSubcategorias );
                
              //obtener categorias unicas
              const obtenerSoloUnaCategoria = new Set( this.todasLasSubcategorias.map( (unaSubcategoria:any) => unaSubcategoria.tipoDeServicio ) )
              this.subCategoriasUnicas = Array.from( obtenerSoloUnaCategoria )

          })

  }




  // PANTALLA INFORMACION
  verPerfilPadre( perfil:any ){
    
    console.log(perfil)

    this.perfilTrabajador = perfil

    console.log(this.perfilTrabajador.categoria)
  
  }



  verServiciosPadre( perfil:any){

    
    window.scrollTo(0, 0);
    
    
    console.log(this.perfilTrabajador.categoria);



    this.usarRuta.navigate(['/verServicios'], {
      
      queryParams:{
        
       Email: perfil.correoElectronico,
       categoria: perfil.categoria,
       subcategoria: perfil.subcategoria,
       telefono: perfil.telefono,
       ciudad: perfil.ciudad

      }
    })
  }


}
