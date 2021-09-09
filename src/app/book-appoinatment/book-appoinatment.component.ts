import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../mock-cards';

@Component({
  selector: 'app-book-appoinatment',
  templateUrl: './book-appoinatment.component.html',
  styleUrls: ['./book-appoinatment.component.css']
})

export class BookAppoinatmentComponent implements OnInit {
  model!: string;
  cards = card;
  constructor(private route:ActivatedRoute ) {
  }
  
  
  ngOnInit(): void {
    
  }

}
