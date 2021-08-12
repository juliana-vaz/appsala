import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaembarcadosPage } from './listaembarcados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaembarcadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaembarcadosPageRoutingModule {}
