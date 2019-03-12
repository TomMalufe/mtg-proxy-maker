export class Card {
  name: string;
  mana_cost: string;
  cmc: number;
  colors: Color[];
  type_line: string;
  rarity: string;
  oracle_text: string;
  flavor_text: string;
  power: string;
  toughness: string;
  loyalty: string;
  card_faces: CardFace[];
  layout: string;
  legalities: object;
  life_modifier: string;
}

export class CardFace {
  name: string;
  mana_cost: string;
  cmc: number;
  colors: Color[];
  type_line: string;
  oracle_text: string;
  flavor_text: string;
  power: string;
  toughness: string;
  loyalty: string;
}

export enum Color {White='W', Blue='U', Black='B', Red='R', Green='G'}

//Layouts ['normal', 'split', 'flip', 'transform', 'meld', 'leveler', 'saga', 'planar', 'scheme', 'vanguard', 'token', 'double_faced_token', 'emblem', 'augment', 'host']