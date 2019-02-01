import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosURL = 'https://chocolactea-37ff8.firebaseio.com/catalogos.json';

  constructor(private http: Http) { }

  getProductos() {
    return this.http.get(this.productosURL).pipe(map(res => res.json()));
  }
}
