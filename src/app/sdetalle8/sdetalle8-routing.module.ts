import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle8Component } from './components/sdetalle8/sdetalle8.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle8Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle8RoutingModule { }
