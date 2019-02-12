import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styles: []
})
export class CatalogosComponent implements OnInit {
  productos: Producto[];
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    this.activeRoute.queryParams.subscribe(params => {
      this.productos = params['catalogos'];
      console.log('CATALOGOS', this.productos);
    });
    */

    // this.sub = this.route.data.subscribe(v => console.log(v));
    this.productos = this.route.snapshot.data['message'];
    console.log('catalogos', this.route.snapshot.data['message']);
  }
}
