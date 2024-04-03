import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore6Component } from './components/hexisstore6/hexisstore6.component';

const routes: Routes = [

  {
    path: '',
    component: Hexisstore6Component
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore6RoutingModule { }
