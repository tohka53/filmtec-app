import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Heco1Component } from './components/heco1/heco1.component';

const routes: Routes = [

  {
    path: '',
    component: Heco1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Heco1RoutingModule { }
