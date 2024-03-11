import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeckwrapComponent } from './componet/teckwrap/teckwrap.component';

const routes: Routes = [

{
    path: '',
    component: TeckwrapComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeckwrapRoutingModule { }
