import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CatalogosComponent } from '../app/components/catalogos/catalogos.component';
import { CotizadorComponent } from '../app/components/cotizador/cotizador.component';
import { ProductosService } from 'src/app/services/productos.service';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent/*, data : {some_data : 'some value'} */  , resolve: { message: ProductosService }},
    { path: 'catalogos', component: CatalogosComponent , resolve: { message: ProductosService }},
    { path: 'cotizador', component: CotizadorComponent , resolve: { message: ProductosService }},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
