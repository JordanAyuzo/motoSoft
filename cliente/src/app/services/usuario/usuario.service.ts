import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient) { }
  searchUser(usuario:any) {
    return this.http.post(`${environment.API_URI}/usuario/searchUser`,usuario);
  }
  listOne(usuario:any) {
    return this.http.post(`${environment.API_URI}/usuario/listOne`,usuario);
  }
  match(usuario:any) {
    return this.http.post(`${environment.API_URI}/usuario/match`,usuario);
  }
  create(usuario:any) {
    return this.http.post(`${environment.API_URI}/usuario/create`,usuario);
  }
}