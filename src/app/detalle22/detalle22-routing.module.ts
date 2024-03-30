import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle22Component } from './components/detalle22/detalle22.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle22Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle22RoutingModule { }
