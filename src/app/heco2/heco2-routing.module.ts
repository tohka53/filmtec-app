import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco2Component } from './components/heco2/heco2.component';

const routes: Routes = [



  {
    path: '',
    component: Heco2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco2RoutingModule { }
