import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle1Component } from './components/detalle1/detalle1.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle1RoutingModule { }
