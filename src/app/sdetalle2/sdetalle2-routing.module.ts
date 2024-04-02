import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle2Component } from './components/sdetalle2/sdetalle2.component';

const routes: Routes = [
  {
    path: '',
    component: Sdetalle2Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle2RoutingModule { }
