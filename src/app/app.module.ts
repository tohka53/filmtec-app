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
import { Detalle10Component } from './detalle10/components/detalle10/detalle10.component';
import { Detalle11Component } from './detalle11/components/detalle11/detalle11.component';
import { Detalle12Component } from './detalle12/components/detalle12/detalle12.component';
import { Detalle13Component } from './detalle13/components/detalle13/detalle13.component';
import { Detalle14Component } from './detalle14/components/detalle14/detalle14.component';
import { Detalle15Component } from './detalle15/components/detalle15/detalle15.component';
import { Detalle16Component } from './detalle16/components/detalle16/detalle16.component';
import { Detalle17Component } from './detalle17/components/detalle17/detalle17.component';
import { Detalle18Component } from './detalle18/components/detalle18/detalle18.component';
import { Detalle19Component } from './detalle19/components/detalle19/detalle19.component';
import { Detalle20Component } from './detalle20/components/detalle20/detalle20.component';
import { Detalle21Component } from './detalle21/components/detalle21/detalle21.component';
import { Detalle22Component } from './detalle22/components/detalle22/detalle22.component';
import { HexishomeComponent } from './hexishome/components/hexishome/hexishome.component';
import { Sdetalle1Component } from './sdetalle1/components/sdetalle1/sdetalle1.component';
import { Sdetalle2Component } from './sdetalle2/components/sdetalle2/sdetalle2.component';
import { Sdetalle3Component } from './sdetalle3/components/sdetalle3/sdetalle3.component';
import { Sdetalle4Component } from './sdetalle4/components/sdetalle4/sdetalle4.component';
import { Sdetalle5Component } from './sdetalle5/components/sdetalle5/sdetalle5.component';
import { Sdetalle6Component } from './sdetalle6/components/sdetalle6/sdetalle6.component';
import { Sdetalle7Component } from './sdetalle7/components/sdetalle7/sdetalle7.component';
import { Sdetalle8Component } from './sdetalle8/components/sdetalle8/sdetalle8.component';
import { Suntekstore1Component } from './suntekstore1/components/suntekstore1/suntekstore1.component';
import { Sdetalle9Component } from './sdetalle9/components/sdetalle9/sdetalle9.component';
import { Sdetalle10Component } from './sdetalle10/components/sdetalle10/sdetalle10.component';
import { Sdetalle11Component } from './sdetalle11/components/sdetalle11/sdetalle11.component';
import { Sdetalle12Component } from './sdetalle12/components/sdetalle12/sdetalle12.component';
import { Heco1Component } from './heco1/components/heco1/heco1.component';
import { Heco2Component } from './heco2/components/heco2/heco2.component';
import { Heco3Component } from './heco3/components/heco3/heco3.component';
import { Heco4Component } from './heco4/components/heco4/heco4.component';
import { Heco5Component } from './heco5/components/heco5/heco5.component';
import { Heco6Component } from './heco6/components/heco6/heco6.component';
import { Heco7Component } from './heco7/components/heco7/heco7.component';
import { Heco8Component } from './heco8/components/heco8/heco8.component';
import { Heco9Component } from './heco9/components/heco9/heco9.component';
import { Heco10Component } from './heco10/components/heco10/heco10.component';
import { Heco11Component } from './heco11/components/heco11/heco11.component';
import { Hexisstore5Component } from './hexisstore5/components/hexisstore5/hexisstore5.component';
import { Hcri1Component } from './hcri1/components/hcri1/hcri1.component';
import { Hexisstore6Component } from './hexisstore6/components/hexisstore6/hexisstore6.component';
import { Hcri2Component } from './hcri2/components/hcri2/hcri2.component';
import { Hcri3Component } from './hcri3/components/hcri3/hcri3.component';
import { Hcf1Component } from './hcf1/components/hcf1/hcf1.component';
import { Hcf2Component } from './hcf2/components/hcf2/hcf2.component';
import { Hcf3Component } from './hcf3/components/hcf3/hcf3.component';
import { Hcf4Component } from './hcf4/components/hcf4/hcf4.component';

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
    Detalle9Component,
    Detalle10Component,
    Detalle11Component,
    Detalle12Component,
    Detalle13Component,
    Detalle14Component,
    Detalle15Component,
    Detalle16Component,
    Detalle17Component,
    Detalle18Component,
    Detalle19Component,
    Detalle20Component,
    Detalle21Component,
    Detalle22Component,
    HexishomeComponent,
    Sdetalle1Component,
    Sdetalle2Component,
    Sdetalle3Component,
    Sdetalle4Component,
    Sdetalle5Component,
    Sdetalle6Component,
    Sdetalle7Component,
    Sdetalle8Component,
    Suntekstore1Component,
    Sdetalle9Component,
    Sdetalle10Component,
    Sdetalle11Component,
    Sdetalle12Component,
    Heco1Component,
    Heco2Component,
    Heco3Component,
    Heco4Component,
    Heco5Component,
    Heco6Component,
    Heco7Component,
    Heco8Component,
    Heco9Component,
    Heco10Component,
    Heco11Component,
    Hexisstore5Component,
    Hcri1Component,
    Hexisstore6Component,
    Hcri2Component,
    Hcri3Component,
    Hcf1Component,
    Hcf2Component,
    Hcf3Component,
    Hcf4Component
   
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
