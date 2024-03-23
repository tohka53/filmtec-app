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
import { SalesComponent } from './sales/components/sales/sales.component';
import { NosotrosComponent } from './nosotros/components/nosotros/nosotros.component';
import { Detalle1Component } from './detalle1/components/detalle1/detalle1.component';
import { HX20G04SComponent } from './HX20G04S/components/hx20-g04-s/hx20-g04-s.component';
import { HX20G12BComponent } from './HX20G12B/components/hx20-g12-b/hx20-g12-b.component';
import { HX20PCABComponent } from './HX20PCAB/components/hx20-pcab/hx20-pcab.component';
import { Detalle2Component } from './detalle2/components/detalle2/detalle2.component';
import { Detalle3Component } from './detalle3/components/detalle3/detalle3.component';
import { Detalle4Component } from './detalle4/components/detalle4/detalle4.component';
import { Detalle5Component } from './detalle5/components/detalle5/detalle5.component';
import { Detalle6Component } from './detalle6/components/detalle6/detalle6.component';
import { Detalle7Component } from './detalle7/components/detalle7/detalle7.component';
import { Detalle8Component } from './detalle8/components/detalle8/detalle8.component';
import { Detalle9Component } from './detalle9/components/detalle9/detalle9.component';

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
    CotizadorComponent,
    SalesComponent,
    NosotrosComponent,
    Detalle1Component,
    HX20G04SComponent,
    HX20G12BComponent,
    HX20PCABComponent,
    Detalle2Component,
    Detalle3Component,
    Detalle4Component,
    Detalle5Component,
    Detalle6Component,
    Detalle7Component,
    Detalle8Component,
    Detalle9Component
   
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
