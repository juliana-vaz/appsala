import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EmbarcadosPageRoutingModule } from './embarcados-routing.module';

import { EmbarcadosPage } from './embarcados.page';

@NgModule({
  imports: [
    SharedModule,
    EmbarcadosPageRoutingModule
  ],
  declarations: [EmbarcadosPage]
})
export class EmbarcadosPageModule {}
