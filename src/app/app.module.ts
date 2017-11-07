import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { LocationComponent } from './location/location.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { LoginComponent } from './login/login.component';
import { GeoService } from './geo.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    MainComponent,
    LocationComponent,
    GooglemapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz0VhqwiURR9rp7hlNzBwERfJPBDPUfT4'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
      {
        path: 'googlemap',
        component: GooglemapComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  bootstrap: [AppComponent],
  providers: [GeoService, AngularFireAuth]
})
export class AppModule { }
