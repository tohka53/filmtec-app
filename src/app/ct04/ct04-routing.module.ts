import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct04Component } from './components/ct04/ct04.component';

const routes: Routes = [



  {
    path: '',
    component: Ct04Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct04RoutingModule { }
