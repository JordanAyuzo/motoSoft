import {Component} from '@angular/core';
import {Moto} from 'src/app/models/moto';
import {MotoService} from 'src/app/services/moto/moto.service';
import {Router} from "@angular/router";
import { Component} from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto/moto.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  moto = new Moto();
  motoAuxiliar: any;
  idMoto: any

  constructor(private motoService: MotoService,
              private router: Router,) {
  motoAuxiliar:any;
  idMoto:any

  constructor(private router: Router,
              private motoService: MotoService){
    this.idMoto = localStorage.getItem('moto')
    this.moto.id = this.idMoto
    this.motoService.listOne(this.moto).subscribe((resmoto: any) => {
        this.motoAuxiliar = resmoto;
        this.moto = this.motoAuxiliar
        console.log(this.moto);

      },
      (err: any) => console.error(err)
    );

  }

  /**
   * Implementando metodo para rentar una moto
   */
  rentar() {
    this.router.navigate(['/detalle-renta']);
  rentar(){
    this.router.navigate(['/form']);
  }
}
