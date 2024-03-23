import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle2Component } from './components/detalle2/detalle2.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle2Component
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle2RoutingModule { }
