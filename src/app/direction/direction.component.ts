
import {Component, OnInit, ViewChild} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { card } from '../mock-cards';


@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css'],


})
export class DirectionComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  CenterName!: string;
  infoContent:any;
  
  markers : any = [];
  zoom = 17;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
    
    
  }
  
  constructor(private route:ActivatedRoute) {
    
  }
  ngOnInit() {    
    var centerId = Number(this.route.snapshot.queryParams['CenterId']);

    var center = card.filter((element, index)=> {
      return element.CenterId == centerId;
    })[0];
    console.log(center);
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: center.cenLocationlatitude,
        lng: center.cenLocationlongitude,
      }
    });

    //add users location marker 

    // this.markers.push({
    //   position: {
    //     lat:this.center.lat ,
    //     lng: this.center.lng
    //   },
      
     
    //   label: {
    //     color: 'red',
    //     text: "Distance Location",
    //   },
    //   title:"",
    //   info: 'Marker info ',
    //   options: {
    //     animation: google.maps.Animation.BOUNCE,
    //   },
    // });
    this.markers.push({
      position: {
        lat:center.cenLocationlatitude,
        lng:center.cenLocationlongitude,
      }, 
      label: {
        color: 'red',
        text: " ",
      },
      title:" ",
      info: ' ',
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
  
  zoomIn() {
    if ( this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if ( this.options.minZoom) this.zoom--
  }
  
}





