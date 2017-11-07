import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as GeoFire from 'geofire';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class GeoService {
  hits = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase) { }

  getLocations(radius: number, coords: Array<number>) {
    const firebaseRef = firebase.database().ref('locations');
    const geoFire = new GeoFire(firebaseRef);
    const geoQuery = geoFire.query({
      center: coords,
      radius: radius
    });

    const center = geoQuery.center();

    geoQuery.on('key_entered', (key, location, distance) => {
      const hit = {
        location: location,
        distance: distance
      };
      const currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });

  }

}
