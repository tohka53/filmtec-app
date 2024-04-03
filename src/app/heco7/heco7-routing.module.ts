import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco7Component } from './components/heco7/heco7.component';

const routes: Routes = [

  {
    path: '',
    component: Heco7Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco7RoutingModule { }
