import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'marcas',
    loadChildren: () => import('./marcas/marcas.module').then(m => m.MarcasModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }, 
  {
    path: 'suntek',
    loadChildren: () => import('./suntek/suntek.module').then(m => m.SuntekModule)
  }, 
  {
    path: 'hexis',
    loadChildren: () => import('./hexis/hexis.module').then(m => m.HexisModule)
  }, 
  {
    path: 'teckwrap',
    loadChildren: () => import('./teckwrap/teckwrap.module').then(m => m.TeckwrapModule)
  }, 
  {
    path: 'steps',
    loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule)
  }, 
  {
    path: 'suntekstore',
    loadChildren: () => import('./suntekstore/suntekstore.module').then(m => m.SuntekstoreModule)
  },  
  {
    path: 'hexisstore',
   
    loadChildren: () => import('./hexisstore/hexisstore.module').then(m => m.HexisstoreModule)
  },  
  {
    path: 'teckstore',
    loadChildren: () => import('./teckstore/teckstore.module').then(m => m.TeckstoreModule)
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },  

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
