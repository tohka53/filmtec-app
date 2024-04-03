import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hcri1Component } from './components/hcri1/hcri1.component';

const routes: Routes = [
  {
    path: '',
    component: Hcri1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hcri1RoutingModule { }
