import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuntekComponent } from './componet/suntek/suntek.component';
const routes: Routes = [

  {
    path: '',
    component: SuntekComponent
    

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuntekRoutingModule { }
