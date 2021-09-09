import { Component, OnInit } from '@angular/core';
import { card } from '../mock-cards';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {
  model!: string;
  cards = card;
  constructor() { }

  ngOnInit(): void {
  }

}
