import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionModalComponent } from './transaction-modal.component';
import { CardComponentModule } from '../card/card.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, CardComponentModule],
  declarations: [TransactionModalComponent],
  exports: [TransactionModalComponent]
})
export class TransactionModalComponentModule {}
