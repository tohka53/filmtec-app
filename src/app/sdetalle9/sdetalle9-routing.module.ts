import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle9Component } from './components/sdetalle9/sdetalle9.component';

const routes: Routes = [


  {
    path: '',
    component: Sdetalle9Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle9RoutingModule { }
