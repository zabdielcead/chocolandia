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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogosComponent,
    CotizadorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
