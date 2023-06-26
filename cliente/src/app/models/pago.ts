export class Pago {
  id_tarjeta: number;
  monto: number;
  estado: string;
  referencia: string;

  constructor() {
    this.id_tarjeta = 0;
    this.monto = 0;
    this.estado = "";
    this.referencia = "";
  }
}
