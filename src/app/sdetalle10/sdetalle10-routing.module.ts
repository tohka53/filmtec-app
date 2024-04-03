import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle10Component } from './components/sdetalle10/sdetalle10.component';

const routes: Routes = [
  {
    path: '',
    component: Sdetalle10Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle10RoutingModule { }
