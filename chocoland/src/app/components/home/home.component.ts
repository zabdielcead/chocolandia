import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/productos.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  productos: Producto[];
  constructor(config: NgbCarouselConfig, private productosService: ProductosService) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  onRouterOutletActivate(event: any) {
    console.log(event);
  }
}
