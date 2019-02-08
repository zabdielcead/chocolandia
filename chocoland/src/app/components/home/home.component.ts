import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Catalogos } from 'src/app/interfaces/productos.catalogos';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [NgbCarouselConfig]
})
export class HomeComponent  implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  productos: any;
  constructor(config: NgbCarouselConfig, private route: ActivatedRoute
      // private productosService: ProductosService, private activeRoute: ActivatedRoute
      ) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.keyboard = false;
    config.pauseOnHover = true;
    // this.prod = sessionStorage.getItem('chocolactea');
    // this.productos = JSON.parse(sessionStorage.getItem('chocolactea'));
    // this.productosDos = productosService.getProductosAllTime();
    // console.log('home', productosService.getProductosAllTime());
  }
  ngOnInit() {
    // this.sub = this.route.data.subscribe(v => console.log(v));
    this.productos = this.route.snapshot.data;
    console.log('home', this.route.snapshot.data);
  }

}
