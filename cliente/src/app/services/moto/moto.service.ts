import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class MotoService {
  constructor(private http : HttpClient) { }
  create(moto:any) {
    return this.http.post(`${environment.API_URI}/moto/create`,moto);
  }
  list(moto:any) {
    return this.http.post(`${environment.API_URI}/moto/list`,moto);
  }
  listOne(moto:any) {
    return this.http.post(`${environment.API_URI}/moto/listOne`,moto);
  }
}
