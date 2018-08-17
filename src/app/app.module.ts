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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    MonumentosComponent,
    DondeComerComponent,
    FooterComponent,
    HeaderComponent,
    InformacionDetalladaComponent
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
