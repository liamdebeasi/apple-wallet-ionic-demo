import { Component, ElementRef, Input } from '@angular/core';
import { CardGroup } from '../../interfaces';
import { ModalController, AnimationController } from '@ionic/angular';
import { TransactionModalComponent } from '../transaction-modal/transaction-modal.component';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';
import { createGenericEnterAnimation, createTransactionEnterAnimation } from './animations/enter';
import { createGenericLeaveAnimation, createTransactionLeaveAnimation } from './animations/leave';

@Component({
  selector: 'card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
})
export class CardGroupComponent {
  @Input() group: CardGroup;

  constructor(
    private elementRef: ElementRef,
    private modalCtrl: ModalController,
    private animationCtrl: AnimationController
  ) { }
  
  public generateCardOffset(index: number): string {
    return `${10 * index}px`;
  }
  
  public async openModal() {
    const transactionModal = this.group.type === 'debit' || this.group.type === 'apple-cash';
    const component = transactionModal ? TransactionModalComponent : GenericModalComponent;
    const presentingEl = document.querySelector('app-home') as HTMLElement;
    
    // Depending on the type of card used, show the correct modal/animation combo.
    const enter = transactionModal ? createTransactionEnterAnimation : createGenericEnterAnimation;
    const leave = transactionModal ? createTransactionLeaveAnimation : createGenericLeaveAnimation

    const modal = await this.modalCtrl.create({
      component,
      componentProps: {
        'group': this.group
      },
      enterAnimation: (baseEl) => enter(baseEl, presentingEl, this.elementRef.nativeElement, this.animationCtrl),
      leaveAnimation: (baseEl) => leave(baseEl, presentingEl, this.elementRef.nativeElement, this.animationCtrl)
    });
    
    await modal.present();
  }
}

