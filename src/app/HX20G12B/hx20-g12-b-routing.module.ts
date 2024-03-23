import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HX20G12BComponent } from './components/hx20-g12-b/hx20-g12-b.component';

const routes: Routes = [

  {
    path: '',
    component: HX20G12BComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HX20G12BRoutingModule { }
