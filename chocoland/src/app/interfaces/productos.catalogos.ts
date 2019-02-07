import { Producto } from './productos.interface';
export class Catalogos {
    catalogos: Producto[];

    constructor(catalogos:  Producto[]) {
        this.catalogos = catalogos;
    }
}
