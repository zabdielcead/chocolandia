import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// bootstrap NG
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// rutas
import { APP_ROUTING } from './app.routes';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';


// servicios
import { ProductosService } from './services/productos.service';

// pipes
import { KeysPipe } from './pipes/keys.pipe';
import { ImagesPipe } from './pipes/images.pipe';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogosComponent,
    CotizadorComponent,
    KeysPipe,
    ImagesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [
      ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
