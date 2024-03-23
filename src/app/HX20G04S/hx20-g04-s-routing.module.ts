import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HX20G04SComponent } from './components/hx20-g04-s/hx20-g04-s.component';

const routes: Routes = [

  {
    path: '',
    component: HX20G04SComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HX20G04SRoutingModule { }
