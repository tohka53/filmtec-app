import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle7Component } from './components/sdetalle7/sdetalle7.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle7Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle7RoutingModule { }
