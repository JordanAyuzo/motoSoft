import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Moto } from 'src/app/models/moto';
import { Router} from '@angular/router';
import { MotoService } from 'src/app/services/moto/moto.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pageSize = 9;
  p = 1;
  motos:any;
  moto = new Moto();
  constructor(private router: Router,
    private motoService: MotoService){
    this.motoService.list(this.moto).subscribe((resmoto: any) => {
      
      this.motos= resmoto;
      
  },
      (err: any) => console.error(err)
    );
  }
  
  vermoto(id:any){
    localStorage.setItem("moto",id+""); 
    this.router.navigate(['/rent']);
  }

}
