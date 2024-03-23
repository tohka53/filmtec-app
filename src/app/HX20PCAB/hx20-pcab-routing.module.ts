import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HX20PCABComponent } from './components/hx20-pcab/hx20-pcab.component';
const routes: Routes = [

  {
    path: '',
    component: HX20PCABComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HX20PCABRoutingModule { }
