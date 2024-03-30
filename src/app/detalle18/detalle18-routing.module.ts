import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle18Component } from './components/detalle18/detalle18.component';

const routes: Routes = [


  {
    path: '',
    component: Detalle18Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle18RoutingModule { }
