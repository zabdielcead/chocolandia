import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interface';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoFormal } from 'src/app/interfaces/pedidoformal';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import {  } from 'emailjs-com';



@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styles: []
})
export class CotizadorComponent implements OnInit {
  forma: FormGroup;
  productos: Producto[];
  pedidoFormal: PedidoFormal;
  pedido: Pedido[];
  sizeCatalogProducto: number;
  totalDineroPedido: number;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.totalDineroPedido = 0;
    this.productos = this.route.snapshot.data['message'];
    this.sizeCatalogProducto = this.productos.length;
    this.pedido = this.setPedidosofProductos(this.productos);
    this.pedidoFormal = new PedidoFormal('', '', '', this.pedido);
    // console.log('cotizador', this.route.snapshot.data);
    this.setFormaValidators();
    console.log('pedidos', this.pedido);
  }
  setPedidosofProductos(product: Producto[]) {
    let pedidoSub: Pedido[] = [];
    if (this.sizeCatalogProducto > 0) {

       for ( let val of product) {
         let pedidosArray = new Pedido(val.id, 0, 0, val.precio_unitario);
         pedidoSub.push(pedidosArray);
       }
    }
    return pedidoSub;
  }

  setFormaValidators() {
   this.forma = new FormGroup({
      'nombre' : new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email' :  new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'telefono' :  new FormControl('', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]),
      'pedido': new FormArray([])
    });
    this.createFormArray();
  }

  createFormArray() {
    for ( let val of this.pedidoFormal.pedido) {
      (<FormArray> this.forma.controls['pedido']).push(
        new FormControl('' , [Validators.pattern('^(0|[1-9][0-9]*)$')])
      );
    }
  }

  operacionTotalPedido(id: string, cantidad: string, precioUnitario: number) {
      console.log('operacion', this.pedidoFormal);
      cantidad = isNaN(parseFloat(cantidad)) ? '0' : cantidad;
      if (cantidad !== '0') {
        let cantidadNumber: number =  parseFloat(cantidad);
        // let pedido: Pedido = this.pedidoFormal.pedido.find( resp => resp.id === id)
        // this.totalDineroPedido = this.totalDineroPedido + (cantidadNumber * precioUnitario);
        this.pedidoFormal.pedido.map(resp  => {
          if (resp.id === id) {
            resp.cantidad  = cantidadNumber;
            resp.precioTotal = cantidadNumber * precioUnitario;
          }
        });
      }
      console.log('operacion2', this.pedidoFormal);
      this.getPedidoTotal();
  }

  getPedidoTotal() {
    let pedidoDinero = 0;
    for ( let val of this.pedidoFormal.pedido ) {
      pedidoDinero = pedidoDinero + ( val.cantidad * val.precioUnitario);
    }
    this.totalDineroPedido = pedidoDinero;
  }

  guardarCambios() {
  }

  sendEmail() {
  }
}
