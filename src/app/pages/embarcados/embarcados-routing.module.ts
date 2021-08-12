import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbarcadosPage } from './embarcados.page';

const routes: Routes = [
  {
    path: '',
    component: EmbarcadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbarcadosPageRoutingModule {}
