import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { MonumentosComponent } from './monumentos/monumentos.component';
import { DondeComerComponent } from './donde-comer/donde-comer.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { ClimatologiaComponent } from './climatologia/climatologia.component';
import { EntornoComponent } from './entorno/entorno.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TiempoComponent } from './tiempo/tiempo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    MonumentosComponent,
    DondeComerComponent,
    FooterComponent,
    HeaderComponent,
    InformacionDetalladaComponent,
    AlojamientoComponent,
    ClimatologiaComponent,
    EntornoComponent,
    ComoLlegarComponent,
    PersonajesComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
