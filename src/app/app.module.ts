import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SuntekComponent } from './suntek/componet/suntek/suntek.component';
import { HexisComponent } from './hexis/componet/hexis/hexis.component';
import { TeckwrapComponent } from './teckwrap/componet/teckwrap/teckwrap.component';
import { StepsComponent } from './steps/componet/steps/steps.component';
import { HexisstoreComponent } from './hexisstore/components/hexisstore/hexisstore.component';
import { SuntekstoreComponent } from './suntekstore/components/suntekstore/suntekstore.component';
import { TeckstoreComponent } from './teckstore/components/teckstore/teckstore.component';
import { HomeComponent } from './home/components/home/home.component';
import { RouterLink } from '@angular/router';
import { MarcasComponent } from './marcas/components/marcas/marcas.component';
import { Hexisstore1Component } from './hexisstore1/components/hexisstore1/hexisstore1.component';
import { Hexisstore2Component } from './hexisstore2/components/hexisstore2/hexisstore2.component';
import { Hexisstore3Component } from './hexisstore3/components/hexisstore3/hexisstore3.component';
import { Hexisstore4Component } from './hexisstore4/components/hexisstore4/hexisstore4.component';
import { CotizadorComponent } from './cotizador/components/cotizador/cotizador.component';

@NgModule({
  declarations: [
    AppComponent,
    SuntekComponent,
    HexisComponent,
    TeckwrapComponent,
    StepsComponent,
    HexisstoreComponent,
    SuntekstoreComponent,
    TeckstoreComponent,
    HomeComponent,
    MarcasComponent,
    Hexisstore1Component,
    Hexisstore2Component,
    Hexisstore3Component,
    Hexisstore4Component,
    CotizadorComponent
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
