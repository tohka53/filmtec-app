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
    path: 'detelle',
    loadChildren: () => import('./detalle1/detalle1.module').then(m => m.Detalle1Module)
  }, 
  {
    path: 'HX20G04S',
    loadChildren: () => import('./HX20G04S/hx20-g04-s.module').then(m => m.HX20G04SModule)
  }, 
  {
    path: 'HX20G12B',
    loadChildren: () => import('./HX20G12B/hx20-g12-b.module').then(m => m.HX20G12BModule)
  },  
  {
    path: 'HX20PCAB',
    loadChildren: () => import('./HX20PCAB/hx20-pcab.module').then(m => m.HX20PCABModule)
  }, 
  {
    path: 'HX20R05B',
    loadChildren: () => import('./detalle2/detalle2.module').then(m => m.Detalle2Module)
  }, 
  {
    path: 'HX20VAVM',
    loadChildren: () => import('./detalle3/detalle3.module').then(m => m.Detalle3Module)
  }, 

  {
    path: 'HX20VMIM',
    loadChildren: () => import('./detalle4/detalle4.module').then(m => m.Detalle4Module)
  }, 
  {
    path: 'HX30BASILB',
    loadChildren: () => import('./detalle5/detalle5.module').then(m => m.Detalle5Module)
  }, 

  {
    path: 'HX30BNCB',
    loadChildren: () => import('./detalle6/detalle6.module').then(m => m.Detalle6Module)
  }, 

  {
    path: 'HX30CANPEB',
    loadChildren: () => import('./detalle7/detalle7.module').then(m => m.Detalle7Module)
  }, 
  {
    path: 'HX30G446B',
    loadChildren: () => import('./detalle8/detalle8.module').then(m => m.Detalle8Module)
  }, 
  {
    path: 'HX30RGOM',
    loadChildren: () => import('./detalle9/detalle9.module').then(m => m.Detalle9Module)
  }, 

  {
    path: 'HX30SCH03S',
    loadChildren: () => import('./detalle10/detalle10.module').then(m => m.Detalle10Module)
  }, 
  {
    path: 'HX30SCH07B',
    loadChildren: () => import('./detalle11/detalle11.module').then(m => m.Detalle11Module)
  }, 
  {
    path: 'HX30SCH12S',
    loadChildren: () => import('./detalle12/detalle12.module').then(m => m.Detalle12Module)
  }, 
  {
    path: 'HX20165B',
    loadChildren: () => import('./detalle13/detalle13.module').then(m => m.Detalle13Module)
  }, 

  {
    path: 'HX20428B',
    loadChildren: () => import('./detalle14/detalle14.module').then(m => m.Detalle14Module)
  }, 
  {
    path: 'HX20468B',
    loadChildren: () => import('./detalle15/detalle15.module').then(m => m.Detalle15Module)
  }, 
  {
    path: 'HX20613B',
    loadChildren: () => import('./detalle16/detalle16.module').then(m => m.Detalle16Module)
  }, 
  {
    path: 'HX20614B',
    loadChildren: () => import('./detalle17/detalle17.module').then(m => m.Detalle17Module)
  }, 

  {
    path: 'HX20615B',
    loadChildren: () => import('./detalle18/detalle18.module').then(m => m.Detalle18Module)
  }, 
  {
    path: 'HX20890B',
    loadChildren: () => import('./detalle19/detalle19.module').then(m => m.Detalle19Module)
  }, 
  {
    path: 'HX20890W',
    loadChildren: () => import('./detalle20/detalle20.module').then(m => m.Detalle20Module)
  }, 
  {
    path: 'HX20905M',
    loadChildren: () => import('./detalle21/detalle21.module').then(m => m.Detalle21Module)
  }, 
  {
    path: 'HX20990M',
    loadChildren: () => import('./detalle22/detalle22.module').then(m => m.Detalle22Module)
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
