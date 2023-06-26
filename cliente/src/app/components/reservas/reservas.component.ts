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
  confirmacion = false

  constructor(private rentaService: RentaService) {
    this.id = localStorage.getItem('dato');

    this.rentaService.list(this.id).subscribe((resrenta: any) => {
        this.rentas = resrenta;
        console.log("Rentas: ", this.rentas);
      },
      (err: any) => console.error(err)
    );

  }

  cancelar(id: any) {
    console.log("id: ", id)
    this.rentaService.cancelar(id).subscribe((resrenta: any) => {
        this.rentaService.list(this.id).subscribe((resrenta: any) => {
            this.rentas = resrenta;
            console.log("Rentas: ", this.rentas);

            this.confirmacion = true
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
}
