import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'embarcados',
    loadChildren: () => import('./pages/embarcados/embarcados.module').then( m => m.EmbarcadosPageModule)
  },
  {

    path: 'recuperarsenha',
    loadChildren: () => import('./pages/auth/recuperarsenha/recuperarsenha.module').then( m => m.RecuperarsenhaPageModule)
  },
  {
    path: 'ambientes',
    loadChildren: () => import('./pages/ambientes/ambientes.module').then( m => m.AmbientesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'listaembarcados',
    loadChildren: () => import('./pages/listaembarcados/listaembarcados.module').then( m => m.ListaembarcadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
