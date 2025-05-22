import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-hijo',
  templateUrl: './login-hijo.component.html',
  styleUrls: ['./login-hijo.component.css']
})


export class LoginComponent {
  
  @Input() usuarioHijo:any
  @Input() imagenHijo:any


}
