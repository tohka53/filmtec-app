import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle8Component } from './components/detalle8/detalle8.component';

const routes: Routes = [



  {
    path: '',
    component: Detalle8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle8RoutingModule { }
