import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MyApp } from './app.component';
import { ConverterComponent, KingsComponent, KingsTimelineComponent } from './containers';
import {
  ConversionItemComponent,
  ExpanderComponent,
  KingsListModal,
  ProfileModal,
  PersonCardComponent,
  TimelineRowComponent } from './components';

import { KingsService } from './services/kings.service';
import { KingsEffects } from './effects/kings.effects';
import { MeasurementsService } from './services/measurements.service';
import { MeasurementsEffects } from './effects/measurements.effects';
import { TimelineService } from './services/timeline.service';
import { TimelineEffects } from './effects/timeline.effects';


import { kingsReducer } from './reducers/kings.reducer';
import { measurementsReducer } from './reducers/measurements.reducer';
import { timelineReducer } from './reducers/timeline.reducer';

@NgModule({
  declarations: [
    MyApp,
    ConversionItemComponent,
    ConverterComponent,
    ExpanderComponent,
    KingsComponent,
    KingsTimelineComponent,
    PersonCardComponent,
    TimelineRowComponent,
    KingsListModal,
    ProfileModal,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({kings: kingsReducer, measurements: measurementsReducer, timeline: timelineReducer}),
    EffectsModule.forRoot([KingsEffects, MeasurementsEffects, TimelineEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConverterComponent,
    KingsComponent,
    KingsTimelineComponent,
    KingsListModal,
    ProfileModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KingsService,
    MeasurementsService,
    TimelineService,
  ]
})
export class AppModule {}
