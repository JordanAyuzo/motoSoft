import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) {
  }

  buscar_marca(nombre: string) {
    console.log("Buscando marca: ", nombre)
    return this.http.get(`${environment.API_URI}/busqueda/marca/` + nombre);
  }

  buscar_modelo(nombre: string) {
    return this.http.get(`${environment.API_URI}/busqueda/modelo/` + nombre);
  }

  buscar_kilometraje(nombre: string) {
    return this.http.get(`${environment.API_URI}/busqueda/kilometraje/` + nombre);
  }
}
