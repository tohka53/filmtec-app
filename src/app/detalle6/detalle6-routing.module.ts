import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle6Component } from './components/detalle6/detalle6.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle6Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle6RoutingModule { }
