export class Moto{
    id:number;
    id_usuario:number;
    marca: string;
    modelo: string;
    numero_serie : string;
    matricula: string;
    fecha_registro:string;
    id_seguro:string;
    color:string;
    condicion:string;
    descripcion:string;
    combustible:number;
    kilometraje:number;
    cilindraje:number;
    estado:number;
    costo:number
    constructor() {
        this.id = 0;
        this.id_usuario=0;
        this.marca = "";
        this.modelo = "";
        this.numero_serie="";
        this.matricula="";
        this.descripcion="";
        this.fecha_registro="";
        this.id_seguro = "";
        this.color="";
        this.condicion="";
        this.combustible=0;
        this.kilometraje=0;
        this.cilindraje=0;
        this.estado=0
        this.costo=0;
    }
}