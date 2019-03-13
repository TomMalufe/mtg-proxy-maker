# MtgProxyMaker (WIP)

This project is meant for personal use and is just for learning experience as I play with the Angular and TypeScript.

It is still very much a work in progress with the end goal of creating something similar to http://www.mtgpress.net/ The difference being that I will not use any of the card images in the end, instead creating a simplified (and printer friendly) version of the cards.

Currently I've only created the standard [layout](https://scryfall.com/docs/api/layouts) card frame, but I plan to create a template for at least 4 other card frame layouts.

I always intended to use other sites to create deck, such as http://tappedout.net/ and so I'm not planning to add much in the way of deck building functionality here.  Although I do plan to add a way to quickly add all the cards of a given set.

One big thing I plan to add, but have yet to investigate how I will do it, is a way to export the cards to a printable PDF (like on MTGPress).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

If you would like to see this working for yourself, you will need to do the following.

For the backend, use [json-server](https://github.com/typicode/json-server) along with the [Scryfall Oracle Cards](https://archive.scryfall.com/json/scryfall-oracle-cards.json) json file.

Then, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Well, I didn't really add any unit tests because this was just for me.
