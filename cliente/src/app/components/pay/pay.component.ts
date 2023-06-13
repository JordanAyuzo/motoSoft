import { Component } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjetas';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  tarjeta= new Tarjeta;
  tarjetas:any;
  id:any

  constructor(private tarjetaService: TarjetaService){
    this.id = localStorage.getItem('dato');
    this.tarjeta.id_usuario=this.id;
    this.tarjetaService.list(this.tarjeta).subscribe((restarjeta: any) => {
      this.tarjetas=restarjeta;
  },
      (err: any) => console.error(err)
    );

  }
  pagar(id:any){
    //aqui va el codigo de pagar
  }

}
