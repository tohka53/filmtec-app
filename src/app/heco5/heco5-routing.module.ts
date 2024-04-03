import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco5Component } from './components/heco5/heco5.component';

const routes: Routes = [

  {
    path: '',
    component: Heco5Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco5RoutingModule { }
