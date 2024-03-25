import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle14Component } from './components/detalle14/detalle14.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle14Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle14RoutingModule { }
