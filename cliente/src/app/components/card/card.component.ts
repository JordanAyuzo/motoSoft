import { Component } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjetas';
import { TarjetaService } from 'src/app/services/tarjeta/tarjeta.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
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
  registrar(){
    this.tarjetaService.create(this.tarjeta).subscribe((restarjeta: any) => {
      this.tarjetaService.list(this.tarjeta).subscribe((restarjeta: any) => {
        this.tarjetas=restarjeta;
        this.tarjeta= new Tarjeta
        this.tarjeta.id_usuario=this.id;
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }
}
