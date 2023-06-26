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


  constructor(private router: Router,
              private motoService: MotoService,
              private busquedaService: BusquedaService,
              private comunicacionService: ComunicacionService) {

    this.comunicacionService.observador$.subscribe(
      (msg) => {
        if (msg.component === 0) {
          this.busqueda = localStorage.getItem('busqueda')
          localStorage.removeItem('busqueda')
          console.log(this.busqueda)
          this.busquedaService.buscar_nombre(this.busqueda).subscribe((resbusqueda: any) => {
            this.motos = resbusqueda;
            console.log("Mostrando motos 2")
          })
        }
      }
    )
  }

  vermoto(id: any) {
    localStorage.setItem("moto", id + "");
    this.router.navigate(['/rent']);
  }
}
