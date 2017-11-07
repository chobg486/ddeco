import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  lat: number;
  lng: number;
  markers: any;
  subscription: any;
  isinfoWindow = true;
  constructor(private geo: GeoService) { }

  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.markers = hits);
  }

  private mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng
    // });
    console.log($event);
  }
  private selectPartner(coords: Array<number>) {
    this.lat = coords[0];
    this.lng = coords[1];
    this.isinfoWindow = false;
  }
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geo.getLocations(100, [this.lat, this.lng]);
      });
    }
  }
}
