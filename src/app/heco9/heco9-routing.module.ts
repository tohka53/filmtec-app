import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco9Component } from './components/heco9/heco9.component';

const routes: Routes = [
  {
    path: '',
    component: Heco9Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco9RoutingModule { }
