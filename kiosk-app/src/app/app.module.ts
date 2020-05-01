import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/*************************************************************************************************/ 
 



import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatRippleModule} from '@angular/material/core';
import { WeatherComponent } from './components/weather/weather.component';
import { MapComponent } from './components/map/map.component';
import { TransitComponent } from './components/transit/transit.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { MapDialogComponent } from './components/map/map-dialog/map-dialog.component';
import { EventsDialogComponent } from './components/events/events-dialog/events-dialog.component';
import { NewsDialogComponent } from './components/news/news-dialog/news-dialog.component';
import { TransitDialogComponent } from './components/transit/transit-dialog/transit-dialog.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyDialogComponent } from './components/survey/survey-dialog/survey-dialog.component';
import { TimeComponent } from './components/time/time.component';
import { StoreModule } from '@ngrx/store';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { AirqualityComponent } from './components/airquality/airquality.component';
import { AirqualityService } from './services/airquality.service';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    
    // Material
    MatRippleModule,
    MatDialogModule,


  ],
  declarations: [],
})
export class MaterialModule {}





/******************************************************************************************************/

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MapComponent,
    TransitComponent,
    NewsComponent,
    EventsComponent,
    SurveyComponent,
    TimeComponent,
    AirqualityComponent,
    MapDialogComponent,
    EventsDialogComponent,
    NewsDialogComponent,
    TransitDialogComponent,
    SurveyDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    AirqualityService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MapDialogComponent,
    EventsDialogComponent,
    NewsDialogComponent,
    SurveyDialogComponent,
    TransitDialogComponent
  ]
})
export class AppModule { }
