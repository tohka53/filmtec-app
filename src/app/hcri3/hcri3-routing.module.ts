import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hcri3Component } from './components/hcri3/hcri3.component';

const routes: Routes = [

  {
    path: '',
    component: Hcri3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hcri3RoutingModule { }
