import {Component} from '@angular/core';
import {IncidenciaService} from "../../services/incidencia/incidencia.service";

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {
  incidencia: string

  constructor(private incidenciaService: IncidenciaService) {
    this.incidencia = ''
  }


  enviar() {
    // Obtén una referencia al elemento textarea
    const textarea = document.querySelector('textarea');

// Asigna el valor del textarea a una variable
    // @ts-ignore
    const valorTextarea = textarea.value;
    console.log("Valor: ", valorTextarea)
    let usuario_id = localStorage.getItem('dato')
    this.incidenciaService.crearIncidencia({
      descripcion: valorTextarea,
      usuario_id: usuario_id
    }).subscribe((res: any) => {
      console.log("Res: ", res)
    })


  }

}