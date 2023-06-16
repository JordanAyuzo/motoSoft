import {Component} from '@angular/core';
import {RentaService} from "../../services/renta/renta.service";

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  id: any
  renta: any
  rentas: any

  constructor(private rentaService: RentaService) {
    this.id = localStorage.getItem('dato');

    this.rentaService.list(this.id).subscribe((resrenta: any) => {
        this.rentas = resrenta;
        console.log("Rentas: ", this.rentas);
      },
      (err: any) => console.error(err)
    );

  }
}
