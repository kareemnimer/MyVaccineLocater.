import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { card } from '../mock-cards';


@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css'],


})
export class DirectionComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow

  infoContent : any;
  CenterName!: string;
  markers: any = [];
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
  


  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    var centerId = Number(this.route.snapshot.queryParams['CenterId']);
    var center = card.filter((element, index) => {
      return element.CenterId == centerId;
    })[0];
    
   
    this.infoContent = [center.cenLocationlatitude,center.cenLocationlongitude]; 
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: center.cenLocationlatitude,
        lng: center.cenLocationlongitude,
      }
    });

    this.markers.push({
      position: {
        lat: center.cenLocationlatitude,
        lng: center.cenLocationlongitude,
      },
      label: {
        color: 'red',
        text: " ",
      },
      title: " ",
      info: ' ',
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
  openInfo(marker: MapMarker, content: any) {
    this.info.open(marker)
  }


  zoomIn() {
    if (this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.options.minZoom) this.zoom--
  }

}





