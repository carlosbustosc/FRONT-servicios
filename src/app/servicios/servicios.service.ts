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


}



