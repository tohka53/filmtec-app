import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct08Component } from './components/ct08/ct08.component';

const routes: Routes = [

  {
    path: '',
    component: Ct08Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct08RoutingModule { }
