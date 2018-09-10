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
import { TiempoComponent } from './tiempo/tiempo.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { InfohistoriaComponent } from './infohistoria/infohistoria.component';
import { InfomonumentosComponent } from './infomonumentos/infomonumentos.component';
import { InfonaturalezaComponent } from './infonaturaleza/infonaturaleza.component';
import { InfopersonajesComponent } from './infopersonajes/infopersonajes.component';
import { MenunaturalezaComponent } from './menunaturaleza/menunaturaleza.component';
import { MenupersonajesComponent } from './menupersonajes/menupersonajes.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'historia', component: HistoriaComponent},
    { path: 'historia/:id', component: InfohistoriaComponent},
    { path: 'comer', component: DondeComerComponent},
    { path: 'monumentos', component: MonumentosComponent},
    { path: 'monumentos/:id', component: InfomonumentosComponent},
    { path: 'alojamiento', component: AlojamientoComponent},
    { path: 'climatologia', component: ClimatologiaComponent},
    { path: 'entorno', component: EntornoComponent},
    { path: 'llegar', component: ComoLlegarComponent},
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personajes/categoria/:categoria', component: MenupersonajesComponent},
    { path: 'personajes/:id', component: InfopersonajesComponent},
    { path: 'tiempo', component: TiempoComponent },
    { path: 'naturaleza', component: NaturalezaComponent},
    { path: 'naturaleza/categoria/:categoria', component: MenunaturalezaComponent},
    { path: 'naturaleza/:id', component: InfonaturalezaComponent},
    { path: '**', component: HomeComponent }
 ]