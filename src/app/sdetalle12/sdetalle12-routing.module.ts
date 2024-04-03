import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle12Component } from './components/sdetalle12/sdetalle12.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle12Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle12RoutingModule { }
