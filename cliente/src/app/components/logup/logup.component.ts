import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent {
  pantalla2 = false;
  pantalla1=true;
  mostrarError =false;
  ver = false;
  claseErrorCorreo="";
  claseErrorNombre="";
  mensajeError="";
  desabilitado = true;
  requisitosContrasenia = [
    { texto: 'Al menos 8 caracteres', cumplido: false },
    { texto: 'Al menos una letra mayúscula', cumplido: false },
    { texto: 'Al menos una letra minúscula', cumplido: false },
    { texto: 'Al menos un número', cumplido: false },
    { texto: 'Al menos un caracter especial', cumplido: false }
  ];
  
  usuario = new Usuario;

  constructor(private usuarioServices:UsuarioService){
  }

  continuar() {
    this.claseErrorCorreo = '';
    this.claseErrorNombre = '';

    if(!this.validarCorreo(this.usuario.correo) ||this.usuario.nombre==""){
      this.mensajeError =" Los datos ingresados son incorrectos. Por favor, inténtelo de nuevo.";
      this.mostrarError = true;
      if(!this.validarCorreo(this.usuario.correo) ){this.claseErrorCorreo = 'border-danger';}
      if(this.usuario.nombre =="" ){this.claseErrorNombre = 'border-danger';}
      setTimeout(() => {
        this.claseErrorCorreo = '';
        this.claseErrorNombre = '';
        this.mostrarError =false;
      }, 15000);

    }else{
      this.usuarioServices.match(this.usuario).subscribe((resLogup: any) => {
        if(resLogup!=null){
          this.claseErrorCorreo = 'border-danger';
          this.mensajeError ="¡Vaya!Parece que ya han registrado este correo.";
          this.mostrarError=true;   
          setTimeout(() => {
            this.claseErrorCorreo = '';
            this.claseErrorNombre = '';
            this.mostrarError =false;
          }, 15000);
        }else{
          this.pantalla1=false;
          this.pantalla2= true;   
        }
      },
      (err: any) => console.error(err)
      );
    }
    
  }
  registrar(){
  }

  visualizar() {
    this.ver = !this.ver;
  }
  get inputType() {
    return this.ver ? 'text' : 'password';
  }
  validarCorreo(correo: string) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);
  }


  actualizarRequisitos() {
    let cumplidos = 0;
    this.requisitosContrasenia.forEach(req => {
      if (req.texto === 'Al menos 8 caracteres') {
        req.cumplido = this.usuario.clave.length >= 8;
      } else if (req.texto === 'Al menos una letra mayúscula') {
        req.cumplido = /[A-Z]/.test(this.usuario.clave);
      } else if (req.texto === 'Al menos una letra minúscula') {
        req.cumplido = /[a-z]/.test(this.usuario.clave);
      } else if (req.texto === 'Al menos un número') {
        req.cumplido = /\d/.test(this.usuario.clave);
      } else if (req.texto === 'Al menos un caracter especial') {
        req.cumplido = /[!@#$%^&*(),.?":{}|<>]/.test(this.usuario.clave);
      }
    });
  
  for(let i=0; i<this.requisitosContrasenia.length; i++){
    if(this.requisitosContrasenia[i].cumplido){
      cumplidos++;
    }
  }
  if(cumplidos === this.requisitosContrasenia.length){
    this.desabilitado =false;
  }else{
    this.desabilitado =true;
  }
  }
}
