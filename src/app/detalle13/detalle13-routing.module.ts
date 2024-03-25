import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle13Component } from './components/detalle13/detalle13.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle13Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle13RoutingModule { }
