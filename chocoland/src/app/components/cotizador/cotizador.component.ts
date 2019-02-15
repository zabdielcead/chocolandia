import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos.interface';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoFormal } from 'src/app/interfaces/pedidoformal';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';


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
  fb: FormBuilder;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
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


      // let pedidoF = new PedidoFormal('', '', '', pedido);
     // product.forEach(function (val: Producto, index) {
        /*
        pedidos.pedido[index].id = val.id;
        pedidos.pedido[index].id = val.id;
        pedidos.pedido[index].id = val.id;
        */
       for ( let val of product) {
         let pedidosArray = new Pedido(val.id, 0, 0, val.precio_unitario);
         pedidoSub.push(pedidosArray);
       }
      // });
    }
    return pedidoSub;
  }

  setFormaValidators() {
    // (<FormArray>this.checkoutFormGroup.get('products')).at(index);
     // let arrPedidos =   this.pedidoFormal.pedido as FormArray ;
     /*this.fb = new FormBuilder;
       this.forma = this.fb.group({
       });
       */
   this.forma = new FormGroup({
      'nombre' : new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email' :  new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'telefono' :  new FormControl('', [Validators.required]),
      'pedido': new FormArray([])
    });
    this.createFormArray();
  }

  createFormArray() {
    // new FormControl(val , [Validators.pattern('/^[0-9]/')])
    for ( let val of this.pedidoFormal.pedido) {
      (<FormArray> this.forma.controls['pedido']).push(
        new FormControl(val.id , [Validators.required])
      );
    }
  }

  guardarCambios() {
  }


}
