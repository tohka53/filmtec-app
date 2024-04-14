import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct05Component } from './components/ct05/ct05.component';

const routes: Routes = [



  {
    path: '',
    component: Ct05Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct05RoutingModule { }
