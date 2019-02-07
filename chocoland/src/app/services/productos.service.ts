import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {  Catalogos } from 'src/app/interfaces/productos.catalogos';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProductosService {
  productosURL = 'https://chocolactea-37ff8.firebaseio.com/catalogos.json';
  prodAllTime: Catalogos[];
  constructor(private http: Http) {
  }

  getProductos() {
    return this.http.get(this.productosURL).pipe(map(res =>  res.json() ));
  }

/*
  getProductsVars( productos: Producto[]) {
    this.productosService.emit(productos);
  }
  */

  setProductosAllTime( productos: Catalogos[] ) {
    this.prodAllTime = productos;
    return this.prodAllTime;
  }

  getProductosAllTime(  ) {
    return this.prodAllTime;
  }
}
