import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  num:number = 0;
  num1:number = 0;

  
  mostrarMenu:boolean = false;
  mostrarMenuRegistrarme:boolean = false;

  Menu(){
  

    if( this.num == 0){
        
      this.mostrarMenu = true;
      this.num = 1;
    
    }else{
  
      this.mostrarMenu = false;
      this.num = 0
    }

  }




  MenuRegistro(){
    

    if( this.num1 == 0){
        
      this.mostrarMenuRegistrarme = true;
      this.num1 = 1;
    
    }else{
  
      this.mostrarMenuRegistrarme = false;
      this.num1 = 0
    }

  }

}
