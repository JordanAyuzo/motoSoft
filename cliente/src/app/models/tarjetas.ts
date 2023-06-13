export class Tarjeta{
    id:number;
    id_usuario:number;
    numero: string;
    tipo: string;
    expiracion: string;
    constructor() {
        this.id = 0;
        this.id_usuario = 0;
        this.numero = "";
        this.tipo = "";
        this.expiracion=""
    }
}