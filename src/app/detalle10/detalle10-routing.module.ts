import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle10Component } from './components/detalle10/detalle10.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle10RoutingModule { }
