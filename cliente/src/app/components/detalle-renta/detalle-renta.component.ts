import {Component} from '@angular/core';
import {MotoService} from "../../services/moto/moto.service";
import {Router} from "@angular/router";
import {Moto} from "../../models/moto";
import {RentaService} from "../../services/renta/renta.service";

@Component({
  selector: 'app-detalle-renta',
  templateUrl: './detalle-renta.component.html',
  styleUrls: ['./detalle-renta.component.css']
})
export class DetalleRentaComponent {

  moto = new Moto();
  motoAuxiliar: any;
  idMoto: any
  fechaActual: any
  fechaSiguiente: any
  flagDate = false
  fechaInicialRenta: any
  fechaFinalRenta: any
  costo = 0
  pago = false
  confirmacion = false

  constructor(private motoService: MotoService,
              private router: Router,
              private rentaService: RentaService) {

    if (localStorage.getItem('espera') == 'true') {
      // @ts-ignore
      this.costo = parseInt(localStorage.getItem('costo'));
      this.fechaInicialRenta = localStorage.getItem('fechaInicial')
      this.fechaFinalRenta = localStorage.getItem('fechaFinal')

    } else {
      this.idMoto = localStorage.getItem('moto')
      this.moto.id = this.idMoto
      this.motoService.listOne(this.moto).subscribe((resmoto: any) => {
          this.motoAuxiliar = resmoto;
          this.moto = this.motoAuxiliar
          console.log(this.moto);

        },
        (err: any) => console.error(err)
      );


      const fechaActual = new Date();
      const dia = fechaActual.getDate();
      const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Agrega el cero inicial si es necesario
      const año = fechaActual.getFullYear();

      this.fechaActual = `${año}-${mes}-${dia}`;
      this.fechaSiguiente = `${año}-${mes}-${dia + 1}`;
      console.log(this.fechaActual);

    }


  }

  fechaInicial() {
    if (this.flagDate)
      this.costo = this.moto.costo * this.diferenciaDias(this.fechaInicialRenta, this.fechaFinalRenta)
    else
      this.flagDate = true
  }

  calcularCosto() {
    console.log("Calculando costo");
    if (this.flagDate)
      this.costo = this.moto.costo * this.diferenciaDias(this.fechaInicialRenta, this.fechaFinalRenta)
    else
      this.flagDate = true
  }


  private diferenciaDias(fechaInicial: any, fechaFinal: any) {
    const fecha1 = new Date(fechaInicial);
    const fecha2 = new Date(fechaFinal);
    const diferencia = fecha2.getTime() - fecha1.getTime();
    const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  }

  rentar() {
    if (!(localStorage.getItem('espera') == 'true')) {
      localStorage.setItem('costo', String(this.costo))
      localStorage.setItem('fechaInicial', String(this.fechaInicialRenta))
      localStorage.setItem('fechaFinal', String(this.fechaFinalRenta))
      localStorage.setItem('espera', 'true')
      this.router.navigate(['/pay']);
    } else {
      let renta = {
        id_pago: Math.random() * (100000 - 1) + 1,
        id_moto: this.moto.id,
        id_usuario: localStorage.getItem('dato'),
        fecha_inicio: this.fechaInicialRenta,
        fecha_limite: this.fechaFinalRenta,
      }

      this.rentaService.rentar(renta).subscribe((resmoto: any) => {
        console.log(resmoto);
        localStorage.removeItem('espera')

        /*        localStorage.removeItem('costo')
                localStorage.removeItem('fechaInicial')
                localStorage.removeItem('fechaFinal')*/

        this.confirmacion = true
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 5000); // 5000 milisegundos = 5 segundos
      })
    }
  }

}
