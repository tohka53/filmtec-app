import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore1Component } from './components/hexisstore1/hexisstore1.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore1RoutingModule { }
