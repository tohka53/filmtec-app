import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle12Component } from './components/detalle12/detalle12.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle12Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle12RoutingModule { }
