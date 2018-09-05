import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { MonumentosComponent } from './monumentos/monumentos.component';
import { DondeComerComponent } from './donde-comer/donde-comer.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component'
import { ClimatologiaComponent } from './climatologia/climatologia.component';
import { EntornoComponent } from './entorno/entorno.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TiempoComponent } from './tiempo/tiempo.component'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'historia', component: HistoriaComponent},
    { path: 'comer', component: DondeComerComponent},
    { path: 'monumentos', component: MonumentosComponent}, 
    { path: 'alojamiento', component: AlojamientoComponent},
    { path: 'climatologia', component: ClimatologiaComponent},
    { path: 'entorno', component: EntornoComponent},
    { path: 'llegar', component: ComoLlegarComponent},
    { path: 'personajes', component: PersonajesComponent },
    { path: 'tiempo', component: TiempoComponent },
    { path: '**', component: HomeComponent }
 ]