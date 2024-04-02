import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle4Component } from './components/sdetalle4/sdetalle4.component';

const routes: Routes = [
  {
    path: '',
    component: Sdetalle4Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle4RoutingModule { }
