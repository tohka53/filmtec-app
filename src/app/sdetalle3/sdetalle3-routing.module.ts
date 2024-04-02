import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle3Component } from './components/sdetalle3/sdetalle3.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle3Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle3RoutingModule { }
