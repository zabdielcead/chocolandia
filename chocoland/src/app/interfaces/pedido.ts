export class Pedido {
    id: string;
    cantidad: number;
    precioTotal: number;
    precioUnitario: number;
    constructor(id: string, cantidad: number, precioTotal: number, precioUnitario: number) {
                 this.id = id;
                 this.cantidad = cantidad;
                 this.precioTotal = precioTotal;
                 this.precioUnitario = precioUnitario;
    }
}
