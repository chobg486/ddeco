import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  public lat: number;
  public lng: number;
  public zoom: number;

  map: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.map = db.list('map').valueChanges();
  }

  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }

  }

}
