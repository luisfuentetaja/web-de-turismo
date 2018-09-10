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
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { ClimatologiaComponent } from './climatologia/climatologia.component';
import { EntornoComponent } from './entorno/entorno.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { NaturalezaComponent } from './naturaleza/naturaleza.component';
import { InfohistoriaComponent } from './infohistoria/infohistoria.component';
import { InfopersonajesComponent } from './infopersonajes/infopersonajes.component';
import { InfomonumentosComponent } from './infomonumentos/infomonumentos.component';
import { InfonaturalezaComponent } from './infonaturaleza/infonaturaleza.component';
import { MenunaturalezaComponent } from './menunaturaleza/menunaturaleza.component';
import { MenupersonajesComponent } from './menupersonajes/menupersonajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    MonumentosComponent,
    DondeComerComponent,
    FooterComponent,
    HeaderComponent,
    AlojamientoComponent,
    ClimatologiaComponent,
    EntornoComponent,
    ComoLlegarComponent,
    PersonajesComponent,
    TiempoComponent,
    NaturalezaComponent,
    InfohistoriaComponent,
    InfopersonajesComponent,
    InfomonumentosComponent,
    InfonaturalezaComponent,
    MenunaturalezaComponent,
    MenupersonajesComponent
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
