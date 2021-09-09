import { card } from './../mock-cards';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vaccine-centers',
  templateUrl: './vaccine-centers.component.html',
  styleUrls: ['./vaccine-centers.component.css']
})
export class VaccineCentersComponent implements OnInit {
  cards = [...card];
  cardNames = [...card]
  CenterName:any;
  term:any;
  selectedCenter: any;
  constructor() { }
 

  ngOnInit(): void {

  
  }
  onChange(event : any){
    //filter
    if(this.selectedCenter.length > 0){
    var allCards = [...card];
    this.cards = allCards.filter((value,index)=> {
       return value.CenterName.includes(this.selectedCenter);
    });
  }
  }

}
