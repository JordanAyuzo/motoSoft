export class Renta {
  id_moto: number;
  fecha_inicio: string;
  fecha_limite: string;
  id_usuario: number;
  id_pago: number;

  constructor() {
    this.id_moto = 0;
    this.fecha_inicio = "";
    this.fecha_limite = "";
    this.id_usuario = 0;
    this.id_pago = 0;
  }
}
