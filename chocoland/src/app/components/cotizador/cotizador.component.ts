import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styles: []
})
export class CotizadorComponent implements OnInit {
  productos: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.route.snapshot.data;
    console.log('cotizador', this.route.snapshot.data);
  }
}
