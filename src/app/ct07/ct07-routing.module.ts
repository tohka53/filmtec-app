import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct07Component } from './components/ct07/ct07.component';

const routes: Routes = [

  {
    path: '',
    component: Ct07Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct07RoutingModule { }
