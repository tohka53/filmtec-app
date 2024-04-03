import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore5Component } from './components/hexisstore5/hexisstore5.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore5RoutingModule { }
