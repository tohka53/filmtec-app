import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle6Component } from './components/sdetalle6/sdetalle6.component';

const routes: Routes = [

    {
    path: '',
    component: Sdetalle6Component 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle6RoutingModule { }
