import { Component,AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();
  constructor(private router: Router,   private elementRef: ElementRef) {

    //se hace la consulta con el ide
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.elementRef.nativeElement.querySelector('.fade-in').classList.add('fade-in');
      }
    });
  }
  ingresar(){

  //se hace la consulta
  
  localStorage.setItem("dato",this.usuario.id +"");  
    this.router.navigate(['/home']);
  }

  registrarse(){

  }
  recuperarClave(){
    
  }
}
