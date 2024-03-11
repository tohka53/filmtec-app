import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexisstoreComponent } from './components/hexisstore/hexisstore.component';

const routes: Routes = [

  {
    path: '',
    component: HexisstoreComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HexisstoreRoutingModule { }
