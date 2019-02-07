import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {  Catalogos } from 'src/app/interfaces/productos.catalogos';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'chocoland';
  productos: Catalogos[];
  constructor( private productosService: ProductosService ) {
    this.productosService.getProductos().subscribe( data => {
      this.productos = data;
      console.log(  this.productos);
      this.guardarSession(this.productos);
      this.productosService.setProductosAllTime(this.productos);
    });
  }

  ngOnInit() {
    // ...

  }

  guardarSession(  productos: Catalogos[]) {
    sessionStorage.removeItem('chocolactea');
      sessionStorage.setItem('chocolactea', JSON.stringify(productos));
   }
}
