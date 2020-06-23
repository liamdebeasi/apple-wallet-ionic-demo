import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() mask: boolean = true;

  constructor() { }

  ngOnInit() {}

}
