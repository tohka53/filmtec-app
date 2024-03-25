import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle15Component } from './components/detalle15/detalle15.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle15Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle15RoutingModule { }
