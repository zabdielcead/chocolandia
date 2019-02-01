import { Component, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/productos.interface';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chocoland';
  productos: Producto[];

  @Output() activate:  EventEmitter<any> = new EventEmitter<any>();
  constructor(private productosService: ProductosService) {
    console.log('ejecutamos el servicio');
    this.productosService.getProductos().subscribe( data => {
        console.log(data);
        this.productos = data;
        // this.enviar();
      }
    );
  }

  enviar() {
    console.log('enviar');
    this.activate.emit(this.productos);
  }
}
