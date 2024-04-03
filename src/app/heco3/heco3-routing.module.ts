import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco3Component } from './components/heco3/heco3.component';

const routes: Routes = [

  {
    path: '',
    component: Heco3Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco3RoutingModule { }
