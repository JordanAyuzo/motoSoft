import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  usuario= new Usuario();
  datoauxiliar: any;
  constructor(private router: Router) { 
    this.datoauxiliar = localStorage.getItem('dato')
    //hace la consulta
    this.usuario.nombre = "Pedro";
    if(this.datoauxiliar!=null)
      this.usuario.id = this.datoauxiliar;
    else
      this.usuario.id=-1;
  }
  ngOnInit(): void {
  }

 ingresar(){
  this.router.navigate(['/login'])
 }
 opciones(){
  //borrar esta linea
  localStorage.clear();
 }

}
