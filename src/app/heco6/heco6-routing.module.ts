import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco6Component } from './components/heco6/heco6.component';

const routes: Routes = [


  {
    path: '',
    component: Heco6Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco6RoutingModule { }
