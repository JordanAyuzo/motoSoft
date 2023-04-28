import { Component,AfterViewInit, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router,NavigationEnd } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();
  public mostrarError: boolean = false;
  constructor(private router: Router,
              private elementRef: ElementRef,
              private usuarioServices: UsuarioService) {
  }
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.elementRef.nativeElement.querySelector('.fade-in').classList.add('fade-in');
      }
    });
  }
  ingresar(){    
    this.usuarioServices.searchUser(this.usuario).subscribe((resLogin: any) => {
      if (resLogin !=null){
        localStorage.setItem("dato",resLogin.id+""); 
        this.router.navigate(['/home']); 
      }
      else{
        this.mostrarError = true;
      }
  },
      (err: any) => console.error(err)
    );
  }

  registrarse(){
    this.router.navigate(['/logup']); 
  }
  recuperarClave(){
    
  }
}
