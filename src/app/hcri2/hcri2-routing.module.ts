import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hcri2Component } from './components/hcri2/hcri2.component';

const routes: Routes = [

  {
    path: '',
    component: Hcri2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hcri2RoutingModule { }
