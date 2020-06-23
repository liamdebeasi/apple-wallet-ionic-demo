import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericModalComponent } from './generic-modal.component';
import { CardComponentModule } from '../card/card.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, CardComponentModule],
  declarations: [GenericModalComponent],
  exports: [GenericModalComponent]
})
export class GenericModalComponentModule {}
