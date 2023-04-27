import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbDropdownModule] 
})
export class NavbarComponent implements OnInit{
  usuario= new Usuario();
  datoauxiliar: any;
  constructor(private router: Router,
              private usuarioServices: UsuarioService) { 
    this.datoauxiliar = localStorage.getItem('dato')
    if(this.datoauxiliar!=null){
      this.usuario.id = this.datoauxiliar;
      this.usuarioServices.listOne(this.usuario).subscribe((resLogin: any) => {
        this.usuario = resLogin;
    },
        (err: any) => console.error(err)
      );
    }
    else
      this.usuario.id=-1;
  }
  ngOnInit(): void {
  }
 ingresar(){
  this.router.navigate(['/login']);
 }
 registrarse(){}
 asociarse(){
  if(this.usuario.id!=-1){    
  }else{
    this.router.navigate(['/login']);
  }
 }
 opciones(){
  //borrar esta linea
  localStorage.clear();
 }

}
