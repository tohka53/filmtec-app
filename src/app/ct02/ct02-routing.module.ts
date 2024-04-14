import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct02Component } from './components/ct02/ct02.component';

const routes: Routes = [



  {
    path: '',
    component: Ct02Component   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct02RoutingModule { }
