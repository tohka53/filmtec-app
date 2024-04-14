import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore8Component } from './components/hexisstore8/hexisstore8.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore8Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore8RoutingModule { }
