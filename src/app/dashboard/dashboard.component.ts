import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items$: Observable<any[]>;
  size$: BehaviorSubject<string | null>;

  constructor(db: AngularFireDatabase) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(size =>
      db.list('/employees', ref =>
        size ? ref.orderByChild('size').equalTo(size) : ref
      ).snapshotChanges()
    );
  }
  filterBy(size: string | null) {
    this.size$.next(size);
  }
}
