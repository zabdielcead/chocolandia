import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {  Catalogos } from 'src/app/interfaces/productos.catalogos';
import { Resolve } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class ProductosService implements Resolve<any> {
  productosURL = 'https://chocolactea-37ff8.firebaseio.com/catalogos.json';
  prodAllTime: Catalogos[];
  constructor(private http: Http) {
  }

  getProductos() {
    return this.http.get(this.productosURL).pipe(map(res =>  res.json() ));
  }
  resolve() {
    console.log('ejecutando servicio');
    // return this.http.get(this.productosURL).pipe(map(res =>  res.json() ));
    return this.getProductosAllTime();
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




