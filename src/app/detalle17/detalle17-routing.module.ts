import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle17Component } from './components/detalle17/detalle17.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle17Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle17RoutingModule { }
