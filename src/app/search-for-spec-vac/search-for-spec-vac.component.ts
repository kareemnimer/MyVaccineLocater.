
import { Component, OnInit } from '@angular/core';
import { card } from '../mock-cards';

@Component({
  selector: 'app-search-for-spec-vac',
  templateUrl: './search-for-spec-vac.component.html',
  styleUrls: ['./search-for-spec-vac.component.css']
})
export class SearchForSpecVacComponent implements OnInit {
  cards = card;
  term: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
