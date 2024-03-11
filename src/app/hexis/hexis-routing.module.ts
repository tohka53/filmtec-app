import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexisComponent } from './componet/hexis/hexis.component';

const routes: Routes = [

  {
    path: '',
    component: HexisComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HexisRoutingModule { }
