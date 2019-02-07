import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  constructor(private productosService: ProductosService) {
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
