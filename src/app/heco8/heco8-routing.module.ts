import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco8Component } from './components/heco8/heco8.component';

const routes: Routes = [

  {
    path: '',
    component: Heco8Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco8RoutingModule { }
