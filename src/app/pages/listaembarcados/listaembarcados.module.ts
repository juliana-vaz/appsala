import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaembarcadosPageRoutingModule } from './listaembarcados-routing.module';

import { ListaembarcadosPage } from './listaembarcados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaembarcadosPageRoutingModule
  ],
  declarations: [ListaembarcadosPage]
})
export class ListaembarcadosPageModule {}
