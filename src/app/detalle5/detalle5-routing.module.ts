import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle5Component } from './components/detalle5/detalle5.component';

const routes: Routes = [

  {
    path: '',
    component: Detalle5Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Detalle5RoutingModule { }
