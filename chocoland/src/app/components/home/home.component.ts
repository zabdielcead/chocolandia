import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Catalogos } from 'src/app/interfaces/productos.catalogos';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [NgbCarouselConfig]
})
export class HomeComponent  implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  productos: Catalogos[];
  prod: string;
  productosDos: Catalogos[];
  constructor(config: NgbCarouselConfig, private productosService: ProductosService
      // private productosService: ProductosService, private activeRoute: ActivatedRoute
      ) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.keyboard = false;
    config.pauseOnHover = true;
    this.prod = sessionStorage.getItem('chocolactea');
    this.productos = JSON.parse(sessionStorage.getItem('chocolactea'));
    this.productosDos = productosService.getProductosAllTime();
    console.log('home', productosService.getProductosAllTime());
  }
  ngOnInit() {
  }

}
