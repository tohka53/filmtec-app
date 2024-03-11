import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore4Component } from './components/hexisstore4/hexisstore4.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore4RoutingModule { }
