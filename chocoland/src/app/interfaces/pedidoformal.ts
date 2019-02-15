import { Pedido } from './pedido';
export class PedidoFormal {
    nombre: string;
    email: string;
    telefono: string;
    pedido: Pedido[];

    constructor(nombre: string, email: string,  telefono: string, pedido: Pedido[]) {
            this.nombre = nombre;
            this.email = email;
            this.telefono = telefono;
            this.pedido = pedido;
    }
}
