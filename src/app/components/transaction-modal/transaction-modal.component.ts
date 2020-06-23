import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { Card, CardGroup, Transaction } from '../../interfaces';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
})
export class TransactionModalComponent {
  @ViewChild('content', { static: true }) content: IonContent;
  @ViewChild('cardEl', { static: true }) cardEl: ElementRef;
  @ViewChild('miniCardEl', { static: true }) miniCardEl: ElementRef;
  @Input() group: CardGroup;
  
  public transactions: Transaction[] = [
    {
      vendor: 'Payment',
      location: 'secure.example.com',
      date: 'Wednesday',
      price: '$27.00'
    },
    {
      vendor: 'Lyft',
      location: 'Apple Pay',
      date: 'Tuesday',
      price: '$11.46'
    },
    {
      vendor: 'Apple',
      location: 'apple.com/bill',
      date: 'Monday',
      price: '$0.99'
    },
    {
      vendor: 'Dunkin\'',
      location: 'Brookline, MA',
      date: 'Monday',
      price: '$1.34'
    },
    {
      vendor: 'GrubHub',
      location: 'Apple Pay',
      date: 'Sunday',
      price: '$19.24'
    },
    {
      vendor: 'Whole Foods Market',
      location: 'Cambridge, MA',
      date: 'Sunday',
      price: '$15.91'
    },
    {
      vendor: 'Star Market',
      location: 'Brookline, MA',
      date: 'Saturday',
      price: '$81.99'
    },
    {
      vendor: 'Payment',
      location: 'secure.example.com',
      date: 'Wednesday',
      price: '$27.00'
    },
    {
      vendor: 'Lyft',
      location: 'Apple Pay',
      date: 'Tuesday',
      price: '$11.46'
    },
    {
      vendor: 'Apple',
      location: 'apple.com/bill',
      date: 'Monday',
      price: '$0.99'
    },
    {
      vendor: 'Dunkin\'',
      location: 'Brookline, MA',
      date: 'Monday',
      price: '$1.34'
    },
    {
      vendor: 'GrubHub',
      location: 'Apple Pay',
      date: 'Sunday',
      price: '$19.24'
    },
    {
      vendor: 'Whole Foods Market',
      location: 'Cambridge, MA',
      date: 'Sunday',
      price: '$15.91'
    },
    {
      vendor: 'Star Market',
      location: 'Brookline, MA',
      date: 'Saturday',
      price: '$81.99'
    }
  ]

  constructor(
    private modalCtrl: ModalController
  ) { }
  
  async ngOnInit() {
    const scrollEl = await this.content.getScrollElement();
    const options = {
      threshold: 0,
      root: scrollEl
    }
    
    // TODO: We should make sure we destroy the IO on component destroy
    const io = new IntersectionObserver((ev) => {
      if (ev[0].isIntersecting) {
        this.miniCardEl.nativeElement.classList.add('hidden');
      } else {
        this.miniCardEl.nativeElement.classList.remove('hidden');
      }      
    }, options);
    io.observe(this.cardEl.nativeElement);
  }
  
  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  
  getCard(): Card | undefined {
    return (this.group) ? this.group.cards[0] : undefined;
  }
}
