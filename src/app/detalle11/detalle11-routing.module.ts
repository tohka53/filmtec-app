import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle11Component } from './components/detalle11/detalle11.component';

const routes: Routes = [
  {
    path: '',
    component: Detalle11Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle11RoutingModule { }
