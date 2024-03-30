import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle19Component } from './components/detalle19/detalle19.component';

const routes: Routes = [
  {
    path: '',
    component: Detalle19Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle19RoutingModule { }
