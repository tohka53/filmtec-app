import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle9Component } from './components/detalle9/detalle9.component';

const routes: Routes = [



  {
    path: '',
    component: Detalle9Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle9RoutingModule { }
