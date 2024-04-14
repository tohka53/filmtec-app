import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ct06Component } from './components/ct06/ct06.component';

const routes: Routes = [

  {
    path: '',
    component: Ct06Component  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ct06RoutingModule { }
