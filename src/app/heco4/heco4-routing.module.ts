import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco4Component } from './components/heco4/heco4.component';

const routes: Routes = [


  {
    path: '',
    component: Heco4Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco4RoutingModule { }
