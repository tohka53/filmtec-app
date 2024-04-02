import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexishomeComponent } from './components/hexishome/hexishome.component';

const routes: Routes = [

  {
    path: '',
    component: HexishomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HexishomeRoutingModule { }
