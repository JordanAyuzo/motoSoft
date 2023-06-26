import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) {
  }

  buscar_nombre(nombre: string) {
    return this.http.get(`${environment.API_URI}/busqueda/` + nombre);
  }
}
