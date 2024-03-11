import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore3Component } from './components/hexisstore3/hexisstore3.component';

const routes: Routes = [



  {
    path: '',
    component: Hexisstore3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore3RoutingModule { }
