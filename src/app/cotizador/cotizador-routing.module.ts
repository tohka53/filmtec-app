import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './components/cotizador/cotizador.component';

const routes: Routes = [

  { path: '', 
  component: CotizadorComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizadorRoutingModule { }
