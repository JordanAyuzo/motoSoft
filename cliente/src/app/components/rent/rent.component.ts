import { Component } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto/moto.service';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  moto = new Moto();
  motoAuxiliar:any;
  idMoto:any
  constructor(private motoService: MotoService){
    this.idMoto = localStorage.getItem('moto')
    this.moto.id=this.idMoto
    this.motoService.listOne(this.moto).subscribe((resmoto: any) => {
      this.motoAuxiliar= resmoto;
      this.moto=this.motoAuxiliar
      console.log(this.moto);
      
  },
      (err: any) => console.error(err)
    );
  
  }
  rentar(){

  }
}
