import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http : HttpClient) { }

  create(tarjeta:any) {
    return this.http.post(`${environment.API_URI}/tarjeta/create`,tarjeta);
  }
  list(tarjeta:any) {
    return this.http.post(`${environment.API_URI}/tarjeta/list`,tarjeta);
  }
}
