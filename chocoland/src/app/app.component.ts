import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {  Catalogos } from 'src/app/interfaces/productos.catalogos';
import {  ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'chocoland';
  productos: Catalogos[];
  constructor( private productosService: ProductosService, private route: ActivatedRoute ) {
    this.productosService.getProductos().subscribe( data => {
      this.productos = data;
      console.log(  this.productos);
      // this.guardarSession(this.productos);
      this.productosService.setProductosAllTime(this.productos);
    });
  }

  ngOnInit() {
    // ...

  }
  ngOnDestroy() {
    console.log(  'destroy');
    this.productosService.prodAllTime = this.productos;
  }
  /*
  guardarSession(  productos: Catalogos[]) {
    sessionStorage.removeItem('chocolactea');
      sessionStorage.setItem('chocolactea', JSON.stringify(productos));
   }
   */
}
