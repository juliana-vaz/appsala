import { NgModule } from '@angular/core';

import { AmbientesPageRoutingModule } from './ambientes-routing.module';

import { AmbientesPage } from './ambientes.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
  SharedModule,
    AmbientesPageRoutingModule
  ],
  declarations: [AmbientesPage]
})
export class AmbientesPageModule {}
