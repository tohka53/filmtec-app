import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle16Component } from './components/detalle16/detalle16.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle16Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle16RoutingModule { }
