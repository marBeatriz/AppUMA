import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecloutingPageRoutingModule } from './reclouting-routing.module';

import { RecloutingPage } from './reclouting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecloutingPageRoutingModule
  ],
  declarations: [RecloutingPage]
})
export class RecloutingPageModule {}
