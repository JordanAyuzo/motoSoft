import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({

  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']  
})
export class JuegoComponent {
  constructor(private router: Router) {
}
  play(){
    this.router.navigate(['/pruebas']); 

  }
}
