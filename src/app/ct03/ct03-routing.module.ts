import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct03Component } from './components/ct03/ct03.component';

const routes: Routes = [



  {
    path: '',
    component: Ct03Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct03RoutingModule { }
