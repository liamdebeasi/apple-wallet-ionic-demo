import { Component } from '@angular/core';
import { CardGroup } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public cardGroups: CardGroup[] = [
    {
      type: "apple-cash",
      cards: [
        { type: "apple-cash" }
      ]
    },
    {
      type: "debit",
      cards: [
        { type: "debit" }
      ]
    },
    {
      type: "pass",
      cards: [
        { type: "pass" },
        { type: "pass" }
      ]
    },
    {
      type: "generic",
      cards: [
        { type: "generic" },
        { type: "generic" },
        { type: "generic" }
      ]
    }
  ];

  constructor() {}
  
  public generateCardOffset(cardGroup: CardGroup, index: number): any {
    const isDebitOrCash = cardGroup.type === "apple-cash" || cardGroup.type === "debit";
    const offset = isDebitOrCash ? 0 : 230;
    return `${(45 * index) + offset}px`;
  }
}