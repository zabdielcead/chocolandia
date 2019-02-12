export class Producto {
    id: string;
    producto: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    desc5: string;
    img: string;
    precio_unitario: number;
    constructor( id: string, producto: string, desc1: string, desc2: string, desc3: string, desc4: string, desc5: string,
                 img: string , precio_unitario: number ) {
        this.id = id;
        this.producto = producto;
        this.desc1 = desc1;
        this.desc2 = desc2;
        this.desc3 = desc3;
        this.desc4 = desc4;
        this.desc5 = desc5;
        this.img = img;
        this.precio_unitario = precio_unitario;
    }
}
