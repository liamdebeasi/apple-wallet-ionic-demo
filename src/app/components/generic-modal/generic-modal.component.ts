import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardGroup } from '../../interfaces';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss'],
})
export class GenericModalComponent {
  @Input() group: CardGroup;
  constructor(
    private modalCtrl: ModalController
  ) { }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
