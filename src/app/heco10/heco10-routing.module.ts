import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco10Component } from './components/heco10/heco10.component';

const routes: Routes = [

  {
    path: '',
    component: Heco10Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco10RoutingModule { }
