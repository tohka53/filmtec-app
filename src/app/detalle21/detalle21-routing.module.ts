import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle21Component } from './components/detalle21/detalle21.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle21Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle21RoutingModule { }
