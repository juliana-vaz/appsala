import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbientesPage } from './ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: AmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbientesPageRoutingModule {}
