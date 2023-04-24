export class Usuario{
    id:number;
    correo: string;
    nombre: string;
    clave : string;
    tipo:number;
    direccion:string;
    identificacion:string;
    constructor() {
        this.id = 0;
        this.correo = "";
        this.nombre = " ";
        this.clave="";
        this.tipo = 0;
        this.direccion ="";
        this.identificacion="";
    }
}