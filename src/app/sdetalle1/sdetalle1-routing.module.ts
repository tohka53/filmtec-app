import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle1Component } from './components/sdetalle1/sdetalle1.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle1Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle1RoutingModule { }
