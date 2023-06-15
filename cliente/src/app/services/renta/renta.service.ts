import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class RentaService {

  constructor(private http: HttpClient) {
  }

  rentar(datos: any) {
    return this.http.post(`${environment.API_URI}/renta/`, datos);
  }
}
