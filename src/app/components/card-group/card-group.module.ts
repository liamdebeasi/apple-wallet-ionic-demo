import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardGroupComponent } from './card-group.component';
import { CardComponentModule } from '../card/card.module';
import { TransactionModalComponentModule } from '../transaction-modal/transaction-modal.module';
import { TransactionModalComponent } from '../transaction-modal/transaction-modal.component';

import { GenericModalComponentModule } from '../generic-modal/generic-modal.module';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, CardComponentModule, TransactionModalComponentModule, GenericModalComponentModule],
  declarations: [CardGroupComponent],
  exports: [CardGroupComponent],
  entryComponents: [TransactionModalComponent, GenericModalComponent]
})
export class CardGroupComponentModule {}
