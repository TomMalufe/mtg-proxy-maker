import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  API_URL: string = "http://localhost:3000/cards?lang=en&_page=1&_limit=1";

  constructor(private http: HttpClient) { }

  getCards (): Observable<Card[]> {
    return this.http.get<Card[]>(this.API_URL + '&name=' + encodeURI("Prime Speaker Vannifar"));
  }
}
