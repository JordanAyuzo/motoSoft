import { Component, HostListener } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto/moto.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  @HostListener('window:beforeunload', ['$event'])
  moto = new Moto();
  datoauxiliar:any
  registroExitoso = false;
  mostrarError= false;
  public beforeUnloadHandler(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = '¿Estás seguro de que quieres abandonar la página?';
  }
  constructor(private motoService:MotoService){
    this.datoauxiliar =localStorage.getItem('dato');
    this.moto.id_usuario= this.datoauxiliar;
  }

  registrar(){
    if(this.moto.marca== "" ||this.moto.modelo== "" || this.moto.color == ""  || this.moto.numero_serie==""|| this.moto.matricula==""|| this.moto.fecha_registro==""|| this.moto.id_seguro=="" || this.moto.costo==0){
      this.mostrarError=true;
      setTimeout(() => {
        this.mostrarError =false;
      }, 15000);
    }else{
        this.motoService.create(this.moto).subscribe((resmoto: any) => {
          this.moto = new Moto();
          this.mostrarError= false
          this.registroExitoso = true;
        },(err: any) => console.error(err));
    }
  }
}
