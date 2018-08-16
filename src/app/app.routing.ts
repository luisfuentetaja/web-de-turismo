import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { MonumentosComponent } from './monumentos/monumentos.component';
import { DondeComerComponent } from './donde-comer/donde-comer.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'historia', component: HistoriaComponent},
    { path: 'comer', component: DondeComerComponent},
    { path: 'monumentos', component: MonumentosComponent}, 
    { path: '**', component: HomeComponent }
 ]