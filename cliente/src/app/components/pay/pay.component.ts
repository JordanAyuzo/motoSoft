import {Component} from '@angular/core';
import {Tarjeta} from 'src/app/models/tarjetas';
import {TarjetaService} from 'src/app/services/tarjeta/tarjeta.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  tarjeta = new Tarjeta;
  tarjetas: any;
  id: any
  confirmacion: boolean = false;
  costo = localStorage.getItem('costo');

  constructor(private tarjetaService: TarjetaService,
              private router: Router) {
    this.id = localStorage.getItem('dato');
    this.tarjeta.id_usuario = this.id;
    this.tarjetaService.list(this.tarjeta).subscribe((restarjeta: any) => {
        this.tarjetas = restarjeta;
      },
      (err: any) => console.error(err)
    );

  }

  pagar(id: any) {
    //Simulación de pago enviado
    this.confirmacion = true;
    setTimeout(() => {
      // Aquí va el código de pagar que deseas ejecutar después de 5 segundos
      localStorage.setItem("pago", "true");
      // Por ejemplo, puedes hacer una llamada a una API de pago o realizar alguna acción adicional
      this.router.navigate(['/detalle-renta']);

    }, 5000); // 5000 milisegundos = 5 segundos

    //aqui va el codigo de pagar
  }

}
