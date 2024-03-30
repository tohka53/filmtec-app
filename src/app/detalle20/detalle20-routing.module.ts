import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle20Component } from './components/detalle20/detalle20.component';

const routes: Routes = [
  {
    path: '',
    component: Detalle20Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle20RoutingModule { }
