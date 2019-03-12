import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Card } from '../card';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-mtg-card',
  templateUrl: './mtg-card.component.html',
  styleUrls: ['./mtg-card.component.scss']
})
export class MtgCardComponent implements OnInit, AfterViewInit {
  @Input() card: Card;
  manaCost: SafeHtml;
  oracleText: SafeHtml;
  card_id: string;

  symbols: Symbol[] = [
    {regex: /\{0\}/g, html: '<abbr class="card-symbol card-symbol-0" title="Zero mana"></abbr>'},
    {regex: /\{1\}/g, html: '<abbr class="card-symbol card-symbol-1" title="One generic mana"></abbr>'},
    {regex: /\{2\}/g, html: '<abbr class="card-symbol card-symbol-2" title="Two generic mana"></abbr>'},
    {regex: /\{3\}/g, html: '<abbr class="card-symbol card-symbol-3" title="Three generic mana"></abbr>'},
    {regex: /\{4\}/g, html: '<abbr class="card-symbol card-symbol-4" title="Four generic mana"></abbr>'},
    {regex: /\{5\}/g, html: '<abbr class="card-symbol card-symbol-5" title="Five generic mana"></abbr>'},
    {regex: /\{6\}/g, html: '<abbr class="card-symbol card-symbol-6" title="Six generic mana"></abbr>'},
    {regex: /\{7\}/g, html: '<abbr class="card-symbol card-symbol-7" title="Seven generic mana"></abbr>'},
    {regex: /\{8\}/g, html: '<abbr class="card-symbol card-symbol-8" title="Eight generic mana"></abbr>'},
    {regex: /\{9\}/g, html: '<abbr class="card-symbol card-symbol-9" title="Nine generic mana"></abbr>'},
    {regex: /\{10\}/g, html: '<abbr class="card-symbol card-symbol-10" title="Ten generic mana"></abbr>'},
    {regex: /\{11\}/g, html: '<abbr class="card-symbol card-symbol-11" title="Eleven generic mana"></abbr>'},
    {regex: /\{12\}/g, html: '<abbr class="card-symbol card-symbol-12" title="Twelve generic mana"></abbr>'},
    {regex: /\{13\}/g, html: '<abbr class="card-symbol card-symbol-13" title="Thirteen generic mana"></abbr>'},
    {regex: /\{14\}/g, html: '<abbr class="card-symbol card-symbol-14" title="Fourteen generic mana"></abbr>'},
    {regex: /\{15\}/g, html: '<abbr class="card-symbol card-symbol-15" title="Fifteen generic mana"></abbr>'},
    {regex: /\{16\}/g, html: '<abbr class="card-symbol card-symbol-16" title="Sixteen generic mana"></abbr>'},
    {regex: /\{17\}/g, html: '<abbr class="card-symbol card-symbol-17" title="Seventeen generic mana"></abbr>'},
    {regex: /\{18\}/g, html: '<abbr class="card-symbol card-symbol-18" title="Eighteen generic mana"></abbr>'},
    {regex: /\{19\}/g, html: '<abbr class="card-symbol card-symbol-19" title="Nineteen generic mana"></abbr>'},
    {regex: /\{20\}/g, html: '<abbr class="card-symbol card-symbol-20" title="Twenty generic mana"></abbr>'},
    {regex: /\{100\}/g, html: '<abbr class="card-symbol card-symbol-100" title="One hundred generic mana"></abbr>'},
    {regex: /\{1000000\}/g, html: '<abbr class="card-symbol card-symbol-1000000" title="One million generic mana"></abbr>'},
    {regex: /\{2\/B\}/g, html: '<abbr class="card-symbol card-symbol-2B" title="Two generic mana or one black mana"></abbr>'},
    {regex: /\{2\/G\}/g, html: '<abbr class="card-symbol card-symbol-2G" title="Two generic mana or one green mana"></abbr>'},
    {regex: /\{2\/R\}/g, html: '<abbr class="card-symbol card-symbol-2R" title="Two generic mana or one red mana"></abbr>'},
    {regex: /\{2\/U\}/g, html: '<abbr class="card-symbol card-symbol-2U" title="Two generic mana or one blue mana"></abbr>'},
    {regex: /\{2\/W\}/g, html: '<abbr class="card-symbol card-symbol-2W" title="Two generic mana or one white mana"></abbr>'},
    {regex: /\{B\/G\}/g, html: '<abbr class="card-symbol card-symbol-BG" title="One black or green mana"></abbr>'},
    {regex: /\{B\/P\}/g, html: '<abbr class="card-symbol card-symbol-BP" title="One black mana or two life"></abbr>'},
    {regex: /\{B\/R\}/g, html: '<abbr class="card-symbol card-symbol-BR" title="One black or red mana"></abbr>'},
    {regex: /\{B\}/g, html: '<abbr class="card-symbol card-symbol-B" title="One black mana"></abbr>'},
    {regex: /\{CHAOS\}/g, html: '<abbr class="card-symbol card-symbol-CHAOS" title="Chaos"></abbr>'},
    {regex: /\{C\}/g, html: '<abbr class="card-symbol card-symbol-C" title="One colorless mana"></abbr>'},
    {regex: /\{E\}/g, html: '<abbr class="card-symbol card-symbol-E" title="An energy counter"></abbr>'},
    {regex: /\{G\/P\}/g, html: '<abbr class="card-symbol card-symbol-GP" title="One green mana or two life"></abbr>'},
    {regex: /\{G\/U\}/g, html: '<abbr class="card-symbol card-symbol-GU" title="One green or blue mana"></abbr>'},
    {regex: /\{G\/W\}/g, html: '<abbr class="card-symbol card-symbol-GW" title="One green or white mana"></abbr>'},
    {regex: /\{G\}/g, html: '<abbr class="card-symbol card-symbol-G" title="One green mana"></abbr>'},
    {regex: /\{½\}/g, html: '<abbr class="card-symbol card-symbol-HALF" title="One-half generic mana"></abbr>'},
    {regex: /\{HR\}/g, html: '<abbr class="card-symbol card-symbol-HR" title="One-half red mana"></abbr>'},
    {regex: /\{HW\}/g, html: '<abbr class="card-symbol card-symbol-HW" title="One-half white mana"></abbr>'},
    {regex: /\{∞\}/g, html: '<abbr class="card-symbol card-symbol-INFINITY" title="Infinite generic mana"></abbr>'},
    {regex: /\{PW\}/g, html: '<abbr class="card-symbol card-symbol-PW" title="Planeswalker"></abbr>'},
    {regex: /\{P\}/g, html: '<abbr class="card-symbol card-symbol-P" title="One colored mana or two life"></abbr>'},
    {regex: /\{Q\}/g, html: '<abbr class="card-symbol card-symbol-Q" title="Untap this permanent"></abbr>'},
    {regex: /\{R\/G\}/g, html: '<abbr class="card-symbol card-symbol-RG" title="One red or green mana"></abbr>'},
    {regex: /\{R\/P\}/g, html: '<abbr class="card-symbol card-symbol-RP" title="One red mana or two life"></abbr>'},
    {regex: /\{R\/W\}/g, html: '<abbr class="card-symbol card-symbol-RW" title="One red or white mana"></abbr>'},
    {regex: /\{R\}/g, html: '<abbr class="card-symbol card-symbol-R" title="One red mana"></abbr>'},
    {regex: /\{S\}/g, html: '<abbr class="card-symbol card-symbol-S" title="One snow mana"></abbr>'},
    {regex: /\{T\}/g, html: '<abbr class="card-symbol card-symbol-T" title="Tap this permanent"></abbr>'},
    {regex: /\{U\/B\}/g, html: '<abbr class="card-symbol card-symbol-UB" title="One blue or black mana"></abbr>'},
    {regex: /\{U\/P\}/g, html: '<abbr class="card-symbol card-symbol-UP" title="One blue mana or two life"></abbr>'},
    {regex: /\{U\/R\}/g, html: '<abbr class="card-symbol card-symbol-UR" title="One blue or red mana"></abbr>'},
    {regex: /\{U\}/g, html: '<abbr class="card-symbol card-symbol-U" title="One blue mana"></abbr>'},
    {regex: /\{W\/B\}/g, html: '<abbr class="card-symbol card-symbol-WB" title="One white or black mana"></abbr>'},
    {regex: /\{W\/P\}/g, html: '<abbr class="card-symbol card-symbol-WP" title="One white mana or two life"></abbr>'},
    {regex: /\{W\/U\}/g, html: '<abbr class="card-symbol card-symbol-WU" title="One white or blue mana"></abbr>'},
    {regex: /\{W\}/g, html: '<abbr class="card-symbol card-symbol-W" title="One white mana"></abbr>'},
    {regex: /\{X\}/g, html: '<abbr class="card-symbol card-symbol-X" title="X generic mana"></abbr>'},
    {regex: /\{Y\}/g, html: '<abbr class="card-symbol card-symbol-Y" title="Y generic mana"></abbr>'},
    {regex: /\{Z\}/g, html: '<abbr class="card-symbol card-symbol-Z" title="Z generic mana"></abbr>'}
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.manaCost = this.injectSymbols(this.card.mana_cost);
    this.oracleText = this.injectSymbols(this.injectEndlines(this.card.oracle_text));
    this.card_id = this.card.name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/[\s'\-,]+/g, '');
  }

  ngAfterViewInit() {
    this.resizeTextToFit();
  }

  injectSymbols(text:string): SafeHtml {
    let temp:string = text;
    for(let symbol of this.symbols){
      temp = temp.replace(symbol.regex, symbol.html);
    }
    return this.sanitizer.bypassSecurityTrustHtml(temp);
  }

  injectEndlines(text:string): string {
    let temp:string = text;
    temp = temp.replace(/\n/g, '</p><p>');
    return '<p>' + temp + '</p>';
  }

  resizeTextToFit(): void {
    let $text = $("#" + this.card_id + " .vertical-align");
    let $box = $("#" + this.card_id + " .desc-box");
    while ($box[0].clientHeight < $text[0].clientHeight) {
      $text.css('font-size', function(index: number, value: string) {
        return (Number(value.slice(0,-2)) -1).toString() + "px";
      });
    }
  }

}

class Symbol {
  regex: RegExp;
  html: string;
}