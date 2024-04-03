import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle11Component } from './components/sdetalle11/sdetalle11.component';

const routes: Routes = [


  {
    path: '',
    component: Sdetalle11Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle11RoutingModule { }
