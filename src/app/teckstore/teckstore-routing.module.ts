import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeckstoreComponent } from './components/teckstore/teckstore.component';

const routes: Routes = [
  {
    path: '',
    component: TeckstoreComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeckstoreRoutingModule { }
