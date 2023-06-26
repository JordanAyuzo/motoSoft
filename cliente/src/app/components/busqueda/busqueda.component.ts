import {Component} from '@angular/core';
import {Moto} from "../../models/moto";
import {Router} from "@angular/router";
import {MotoService} from "../../services/moto/moto.service";
import {BusquedaService} from "../../services/busqueda/busqueda.service";
import {ComunicacionService} from "../../services/comunicacion/comunicacion.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  pageSize = 9;
  p = 1;
  motos: any;
  moto = new Moto();
  busqueda: any
  coincidencia: boolean = false


  constructor(private router: Router,
              private motoService: MotoService,
              private busquedaService: BusquedaService,
              private comunicacionService: ComunicacionService) {


    this.comunicacionService.observador$.subscribe(
      (msg) => {
        if (msg.component === 0) {
          this.busqueda = localStorage.getItem('busqueda')
          localStorage.removeItem('busqueda')

          if (msg.tipo == 1) {
            this.busquedaService.buscar_marca(this.busqueda).subscribe((resbusqueda: any) => {
              this.motos = resbusqueda;
              this.cambiarCoincidencia()
            })
          }
          if (msg.tipo == 2) {
            this.busquedaService.buscar_modelo(this.busqueda).subscribe((resbusqueda: any) => {
              this.motos = resbusqueda;
            })
            this.cambiarCoincidencia()

          }
          if (msg.tipo == 3) {
            this.busquedaService.buscar_kilometraje(this.busqueda).subscribe((resbusqueda: any) => {
              this.motos = resbusqueda;
            })
            this.cambiarCoincidencia()
          }


        }
      }
    )

  }

  cambiarCoincidencia() {
    if (this.motos.length == 0) {
      this.coincidencia = true
    } else {
      this.coincidencia = false
    }
  }

  vermoto(id: any) {
    localStorage.setItem("moto", id + "");
    this.router.navigate(['/rent']);
  }
}
