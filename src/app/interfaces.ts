export interface CardGroup {
  cards: Card[];
  type: CardType;
}

export interface Card {
  type: CardType;
}

export type CardType = "debit" | "apple-cash" | "pass" | "generic";

export interface Transaction {
  vendor: string;
  location: string;
  date: string;
  price: string;
}