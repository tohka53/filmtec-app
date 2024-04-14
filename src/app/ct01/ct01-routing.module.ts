import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct01Component } from './components/ct01/ct01.component';

const routes: Routes = [


  {
    path: '',
    component: Ct01Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct01RoutingModule { }
