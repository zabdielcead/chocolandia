export class EmailParams {
    nombre: string;
    email: string;
    telefono: string;
    pedido: string;
    total: number;
    fecha: string;

    constructor(nombre: string, email: string, telefono: string, pedido: string, total: number, fecha: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.pedido = pedido;
        this.total = total;
        this.fecha = fecha;
    }
}
