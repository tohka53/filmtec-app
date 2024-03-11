import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuntekstoreComponent } from './components/suntekstore/suntekstore.component';

const routes: Routes = [

  {
    path: '',
    component: SuntekstoreComponent 
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuntekstoreRoutingModule { }
