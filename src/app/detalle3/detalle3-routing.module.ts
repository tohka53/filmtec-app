import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle3Component } from './components/detalle3/detalle3.component';

const routes: Routes = [


  {
    path: '',
    component: Detalle3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle3RoutingModule { }
