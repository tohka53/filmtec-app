import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sdetalle5Component } from './components/sdetalle5/sdetalle5.component';

const routes: Routes = [

  {
    path: '',
    component: Sdetalle5Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdetalle5RoutingModule { }
