import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle4Component } from './components/detalle4/detalle4.component';

const routes: Routes = [



  {
    path: '',
    component: Detalle4Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle4RoutingModule { }
