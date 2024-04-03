import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco11Component } from './components/heco11/heco11.component';

const routes: Routes = [
  {
    path: '',
    component: Heco11Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco11RoutingModule { }
