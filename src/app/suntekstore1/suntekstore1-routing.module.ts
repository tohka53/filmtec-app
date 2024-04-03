import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suntekstore1Component } from './components/suntekstore1/suntekstore1.component';

const routes: Routes = [

  {
    path: '',
    component: Suntekstore1Component 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Suntekstore1RoutingModule { }
