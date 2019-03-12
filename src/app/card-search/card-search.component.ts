import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  cards: Card[];

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.searchService.getCards()
      .subscribe(cards => this.cards = cards);
  }
}
