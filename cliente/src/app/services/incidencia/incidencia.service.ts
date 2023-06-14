import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private http: HttpClient) {
  }

  crearIncidencia(incidencia: any) {
    return this.http.post(`${environment.API_URI}/incidencia`, incidencia);
  }


}
