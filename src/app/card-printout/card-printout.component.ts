import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-printout',
  templateUrl: './card-printout.component.html',
  styleUrls: ['./card-printout.component.scss']
})
export class CardPrintoutComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
