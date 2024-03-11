import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hexisstore2Component } from './components/hexisstore2/hexisstore2.component';

const routes: Routes = [
  {
    path: '',
    component: Hexisstore2Component
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Hexisstore2RoutingModule { }
