import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RecuperarsenhaPageRoutingModule } from './recuperarsenha-routing.module';

import { RecuperarsenhaPage } from './recuperarsenha.page';

@NgModule({
  imports: [
    SharedModule,
    RecuperarsenhaPageRoutingModule
  ],
  declarations: [RecuperarsenhaPage]
})
export class RecuperarsenhaPageModule {}
