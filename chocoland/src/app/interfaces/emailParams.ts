export class EmailParams {
    nombre: string;
    email: string;
    telefono: string;
    pedido: string;
    total: number;
    fecha: string;
    fechauser: string;

    constructor(nombre: string, email: string, telefono: string, pedido: string, total: number, fecha: string, fechauser: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.pedido = pedido;
        this.total = total;
        this.fecha = fecha;
        this.fechauser = fechauser;
    }
}
