import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle7Component } from './components/detalle7/detalle7.component';

const routes: Routes = [


  {
    path: '',
    component: Detalle7Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle7RoutingModule { }
