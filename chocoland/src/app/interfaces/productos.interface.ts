export class Producto {
    id: string;
    producto: string;
    precio_unitario: number;
    constructor( id: string, producto: string , precio_unitario: number ) {
        this.id = id;
        this.producto = producto;
        this.precio_unitario = precio_unitario;
    }
}
