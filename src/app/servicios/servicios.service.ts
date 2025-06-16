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
      
      console.log(datosServicios)
      console.log(datosFormulario)


      const datosServicio = {

        departamento:  datosFormulario.value.departamento,
        ciudad:        datosFormulario.value.ciudad,
        barrio:        datosFormulario.value.barrio,
        direccion:     datosFormulario.value.direccion,
        dia:           datosFormulario.value.dia,    
        hora:          datosFormulario.value.hora,
        servicios:     datosServicios

      }

      console.log(datosServicio)

      return this.usarHttp.get('')

  }
    

  //registrarCliente
  registrarCliente( formulario:any, fotoPerfil:any, antecdentes:any ){
    
      
    //creamso objeto formData
    const datosCliente = new FormData();

        datosCliente.append('nombreCompleto', formulario.nombre)
        datosCliente.append('genero',         formulario.genero)
        datosCliente.append('documento',      formulario.documento)
        datosCliente.append('edad',           formulario.edad);



        datosCliente.append('telefono',       formulario.telefono)
        datosCliente.append('email',          formulario.email)
        datosCliente.append('password',       formulario.pass)
        datosCliente.append('departamento',   formulario.departamento)
        datosCliente.append('ciudad',         formulario.ciudad)
        datosCliente.append('direccion',      formulario.direccion)



        datosCliente.append('rol', "cliente")

        
        //archivos
        datosCliente.append('fotoPerfil', fotoPerfil)
        datosCliente.append('archivoAntecedentes', antecdentes)





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
  RegistrarTrabajador( datosFormulario:any, fotoPersonaC:any, hojaVida:any, campoAntecedentes:any, campoEPS:any  ){
        

    const datosTrabajador = new FormData()

 

  
          datosTrabajador.append('nombres',           datosFormulario.nombre);       
          datosTrabajador.append('edad',              datosFormulario.edad)  
          datosTrabajador.append('documento',         datosFormulario.documento)
          datosTrabajador.append('genero',            datosFormulario.genero)
          datosTrabajador.append('departamento',      datosFormulario.departamento)
          datosTrabajador.append('ciudad',            datosFormulario.ciudad)
          datosTrabajador.append('tipoSangre',        datosFormulario.tipoSangre)
          datosTrabajador.append('telefono',          datosFormulario.telefono)
          datosTrabajador.append('correoElectronico', datosFormulario.email)
          datosTrabajador.append('contrasena',        datosFormulario.pass)
          datosTrabajador.append('contactoDeEmergencia', datosFormulario.telEmergencia)
          datosTrabajador.append('categoria',         datosFormulario.categoria)
          datosTrabajador.append('subcategoria',     datosFormulario.subcategoria)
          
          
          datosTrabajador.append('fotoPersona', fotoPersonaC)
          datosTrabajador.append('documentoHV', hojaVida)
          datosTrabajador.append('documentoAntecedentes', campoAntecedentes)
          datosTrabajador.append('eps',  campoEPS)

          
      console.log(datosTrabajador)

      return this.usarHttp.post('http://localhost:5000/registroTrabajador', datosTrabajador);

  }

}



