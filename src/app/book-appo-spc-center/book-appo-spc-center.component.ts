import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../mock-cards';


@Component({
  selector: 'app-book-appo-spc-center',
  templateUrl: './book-appo-spc-center.component.html',
  styleUrls: ['./book-appo-spc-center.component.css']
})
export class BookAppoSpcCenterComponent implements OnInit {
  model!: string;
  cards = card;
  centerName: string = "";
  constructor(private route:ActivatedRoute ) {
  }
  
  
  ngOnInit(): void {
    var centerId = Number(this.route.snapshot.queryParams['CenterId']);
    var center = card.filter((element, index)=> {
      return element.CenterId == centerId;
    })[0];
    this.centerName = center.CenterName;
    console.log(center.CenterName);
  }
  

}
