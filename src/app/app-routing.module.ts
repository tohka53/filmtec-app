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
    path: 'hexisstore1',
    loadChildren: () => import('./hexisstore1/hexisstore1.module').then(m => m.Hexisstore1Module)
  },  
  {
    path: 'hexisstore2',
    loadChildren: () => import('./hexisstore2/hexisstore2.module').then(m => m.Hexisstore2Module)
  },  
  {
    path: 'hexisstore3',
    loadChildren: () => import('./hexisstore3/hexisstore3.module').then(m => m.Hexisstore3Module)
  },  
  {
    path: 'hexisstore4',
    loadChildren: () => import('./hexisstore4/hexisstore4.module').then(m => m.Hexisstore4Module)
  },  
  {
    path: 'cotizador',
    loadChildren: () => import('./cotizador/cotizador.module').then(m => m.CotizadorModule)
  }, 

  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
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
