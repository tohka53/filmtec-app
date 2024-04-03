import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore7Component } from './components/hexisstore7/hexisstore7.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore7Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore7RoutingModule { }
