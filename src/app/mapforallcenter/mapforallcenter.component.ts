import { Component, OnInit, ViewChild } from '@angular/core'
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-mapforallcenter',
  templateUrl: './mapforallcenter.component.html',
  styleUrls: ['./mapforallcenter.component.css']
})
export class MapforallcenterComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 9
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 6,
  }



  markers =[
    {
    position: new google.maps.LatLng(31.9834063,35.9386273),
    label: { color: 'blue',text: "Prince Hamzah Hospital"},
      title: 'Prince Hamzah Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0075548,35.8725765),
    label: { color: 'blue',text: "Jordan University Hospital"},
      title: 'Jordan University Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.9376378,35.9391419),
    label: { color: 'blue',text: "Al Bashir Hospital"},
      title: 'Al Bashir Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0218986,35.8851182),
    label: { color: 'blue',text: "Jubaiha Comprehensive Health Center"},
      title: 'Jubaiha Comprehensive Health Center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.979302,35.828937),
    label: { color: 'blue',text: "king hussein medical center"},
      title: 'king hussein medical center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0012614,35.9166653),
    label: { color: 'blue',text: "Queen Alia Military Hospital"},
      title: 'Queen Alia Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.9350427,35.9502818),
    label: { color: 'blue',text: "Qweismeh Comprehensive Health Center"},
      title: 'Qweismeh Comprehensive Health Center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0672901,36.0952474),
    label: { color: 'blue',text: "Prince Hashem Military Hospital"},
      title: 'Prince Hashem Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0586282,36.0835604),
    label: { color: 'blue',text: "Directorate of Health Affairs of Zarqa Governorate"},
      title: 'Directorate of Health Affairs of Zarqa Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.033721,36.0448859),
    label: { color: 'blue',text: "Prince Faisal Governmental Hospital"},
      title: 'Prince Faisal Governmental Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.5015583,35.9919583),
    label: { color: 'blue',text: "Founder King Abdullah University Hospital"},
      title: 'Founder King Abdullah University Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.5400486,35.8579876),
    label: { color: 'blue',text: "Directorate of Health Affairs of Irbid Governorat"},
      title: 'Directorate of Health Affairs of Irbid Governorat' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.5036328,35.8629588),
    label: { color: 'blue',text: "Prince Rashid Military Hospital"},
      title: 'Prince Rashid Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    
    {
    position: new google.maps.LatLng(32.5597635,35.9981895),
    label: { color: 'blue',text: "Western Ramtha Health Center"},
      title: 'Western Ramtha Health Center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.5073104,38.1857877),
    label: { color: 'blue',text: "Al-Ruwaished Hospital"},
      title: 'Al-Ruwaished Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.3309968,36.2221126),
    label: { color: 'blue',text: "King Talal Military Hospital"},
      title: 'King Talal Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.3350569,36.214982),
    label: { color: 'blue',text: "Health Affairs Directorate of Mafraq Governorate"},
      title: 'Health Affairs Directorate of Mafraq Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.3072065,35.8827831),
    label: { color: 'blue',text: "Jerash comprehensive health center"},
      title: 'Jerash comprehensive health center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.3440322,35.8171096),
    label: { color: 'blue',text: "Princess Haya Military Hospital"},
      title: 'Princess Haya Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.3276266,35.7481273),
    label: { color: 'blue',text: "Ajloun Comprehensive Health Center"},
      title: 'Ajloun Comprehensive Health Center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(32.0397173,35.7268138),
    label: { color: 'blue',text: "Directorate of Health Affairs of Al-Balqa Governorate"},
      title: 'Directorate of Health Affairs of Al-Balqa Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.7264247,35.7928874),
    label: { color: 'blue',text: "Directorate of Health Affairs of Madaba Governorate"},
      title: 'Directorate of Health Affairs of Madaba Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.1771887,35.7329281),
    label: { color: 'blue',text: "Prince Ali Bin Al Hussein Military Hospital"},
      title: 'Prince Ali Bin Al Hussein Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(31.1670865,35.7048619),
    label: { color: 'blue',text: "Directorate of Health Affairs of Karak Governorate"},
      title: 'Directorate of Health Affairs of Karak Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(30.8261865,35.5856625),
    label: { color: 'blue',text: "Prince Zeid Military Hospital"},
      title: 'Prince Zeid Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(30.8343517,35.6114403),
    label: { color: 'blue',text: "Directorate of Health Affairs of Tafila Governorate"},
      title: 'Directorate of Health Affairs of Tafila Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(30.1971734,35.7276335),
    label: { color: 'blue',text: "Maan Comprehensive Health Center"},
      title: 'Maan Comprehensive Health Center' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(29.5720608,35.0158504),
    label: { color: 'blue',text: "Prince Hashem bin Abdullah Military Hospital"},
      title: 'Prince Hashem bin Abdullah Military Hospital' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    {
    position: new google.maps.LatLng(29.5352222,35.0088435),
    label: { color: 'blue',text: "Directorate of Health Affairs in Aqaba Governorate"},
      title: 'Directorate of Health Affairs in Aqaba Governorate' ,info: 'Marker info ',
      options: {
      animation: google.maps.Animation.BOUNCE,
    },
    },
    
  ];

  constructor() {
  }


  

  ngOnInit() {    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
    
  
  zoomIn() {
    if ( this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if ( this.options.minZoom) this.zoom--
  }
  
  




}
