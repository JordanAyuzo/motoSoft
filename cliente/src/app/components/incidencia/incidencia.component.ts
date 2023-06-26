import {Component} from '@angular/core';
import {IncidenciaService} from "../../services/incidencia/incidencia.service";
import {Incidencia} from "../../models/incidencia";

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent {
  incidencia: string
  confirmacion: boolean
  numeroReporte: number
  incidencia_objeto: any

  constructor(private incidenciaService: IncidenciaService) {
    this.incidencia = ''
    this.confirmacion = false
    this.numeroReporte = 0

    this.incidencia_objeto = new Incidencia()

  }

  enviar() {
    // Obtén una referencia al elemento textarea
    const textarea = document.querySelector('textarea');

// Asigna el valor del textarea a una variable
    // @ts-ignore
    this.incidencia_objeto.descripcion = textarea.value;
    this.incidencia_objeto.id_usuario = localStorage.getItem('dato')
    this.incidenciaService.crearIncidencia({
      descripcion: this.incidencia_objeto.descripcion,
      usuario_id: this.incidencia_objeto.id_usuario
    }).subscribe((res: any) => {
      this.confirmacion = true
      this.incidencia_objeto.id = res.insertId
    })


  }

}
