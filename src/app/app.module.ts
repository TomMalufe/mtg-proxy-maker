import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MtgCardComponent } from './mtg-card/mtg-card.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardPrintoutComponent } from './card-printout/card-printout.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MtgCardComponent,
    CardSearchComponent,
    CardPrintoutComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
