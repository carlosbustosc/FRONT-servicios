import { Injectable } from '@angular/core';

//usar HTttpclient
import { HttpClient } from '@angular/common/http';

//usar map
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private usarHttp:HttpClient ) {  }

  


  //obtener ciudades
  getCiudades(){

      return this.usarHttp.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
          .pipe(
             map( resp => {
                 return resp;
             })
          )
  }

  

  //obtener Todos los servicicios
  getTodosServicios(){

    return this.usarHttp.get('http://localhost:5000/obtenerServicios');

  }

  
  //Obtener subcategoria
  getSubcategoria( subcategoria:any ){

      return this.usarHttp.get(`http://localhost:5000/obtenerSubcategoria/${ subcategoria }`)

  }
  

  //buscar trabajador
  buscarTrabajador( formulario:any ){
      
    //console.log(formulario);

    const datosFormulario = {
    
      categoria:     formulario.categoria,
      ciudad:        formulario.ciudad,
      departamento:  formulario.departamento,
      subcategoria:  formulario.subcategoria
  
    }

    return this.usarHttp.post('http://localhost:5000/buscarTrabajador', datosFormulario)

  }

  
  //traer servicios trabajador
  serviciosTrabajador( correo:string, categoria:string ){
    
    return this.usarHttp.get(`http://localhost:5000/obtenerServiciosTrabajador/${ correo }/${ categoria }`)

  }


  ///agendar servicio de trabajador
  agendarServicioDeUnTrabajador( datosServicios:any, datosFormulario:any ){

      const datosServicio = {

        departamento:  datosFormulario.departamento,
        ciudad:        datosFormulario.ciudad,
        barrio:        datosFormulario.barrio,
        direccion:     datosFormulario.direccion,
        dia:           datosFormulario.dia,    
        hora:          datosFormulario.hora,
        servicios:     datosServicios

      }

      console.log(datosServicio)

      return this.usarHttp.get('')

  }
    

  //registrarCliente
  registrarCliente( formulario:any ){
    
    const datosCliente = {

                nombreCompleto:       formulario.nombre,   
                genero:               formulario.genero,   
                documento:            formulario.documento,  
                edad:                 formulario.edad,  
                fotoPerfil:           formulario.fotoPerfil,  
                telefono:             formulario.telefono , 
                email:                formulario.email,  
                password:             formulario.pass,  
                departamento:         formulario.departamento,
                ciudad:               formulario.ciudad, 
                direccion:            formulario.direccion, 
                archivoAntecedentes:  formulario.antecedentes,
                rol: "cliente"

    }

    console.log(datosCliente)

    return this.usarHttp.post('http://localhost:5000/registrarCliente', datosCliente)

  }


  //login cliente
  loginClientes( email:string, pass:string){
  
    const datosCliente = {

      usuario: email,
      contrasena : pass
    }
      
    return this.usarHttp.post('http://localhost:5000/loginCliente', datosCliente)
  
  }
  

  
  //login trabajador
  loginTrabajador( email:string, pass: string){
      
    const datosTrabajador = {
      
      usuario: email,
      contrasena:pass
    }


    return this.usarHttp.post('http://localhost:5000/loginTrabajador', datosTrabajador)

  }

  //registrar trabajador
  RegistrarTrabajador( datosFormulario:any ){
      
    const datosTrabajador = {

  
          nombres:         datosFormulario.nombre,       
          edad:            datosFormulario.edad,        
          documento:       datosFormulario.documento,   
          genero:          datosFormulario.genero,       
          departamento:    datosFormulario.departamento ,
          ciudad:          datosFormulario.ciudad ,      
          tipoSangre:      datosFormulario.tipoSangre,   
          fotoPersona:     datosFormulario.fotoPersona,  
          documentoHV:     datosFormulario.HV,           
          documentoAntecedentes: datosFormulario.antecedentes, 
          telefono:              datosFormulario.telefono,     
          correoElectronico:     datosFormulario.email,        
          contrasena:            datosFormulario.pass,        
          eps:                   datosFormulario.EPS,          
          contactoDeEmergencia:  datosFormulario.telEmergencia,
          categoria:    datosFormulario.categoria,
          subcategoria: datosFormulario.subcategoria
      
      }

      console.log(datosTrabajador)

      return this.usarHttp.post('http://localhost:5000/registroTrabajador', datosTrabajador);

  }

}



