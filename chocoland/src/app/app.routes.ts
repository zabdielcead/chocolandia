import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CatalogosComponent } from '../app/components/catalogos/catalogos.component';
import { CotizadorComponent } from '../app/components/cotizador/cotizador.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogos', component: CatalogosComponent },
    { path: 'cotizador', component: CotizadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
