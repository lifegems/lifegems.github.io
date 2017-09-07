import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MyApp } from './app.component';
import {
  KingsComponent,
  KingsTimelineComponent,
  ReadingSchedulesComponent, 
  ScheduleSectionComponent } from './containers';
import {
  ExpanderComponent,
  KingsListModal,
  ProfileModal,
  PersonCardComponent,
  ScheduleItemComponent,
  ScheduleSettingsPopover,
  TimelineListModal,
  TimelineRowComponent } from './components';

import { ConverterModule } from './pages/converter/converter.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { KingsService } from './services/kings.service';
import { KingsEffects } from './effects/kings.effects';
import { MeasurementsService } from './services/measurements.service';
import { MeasurementsEffects } from './effects/measurements.effects';
import { SchedulesService } from './services/schedules.service';
import { SchedulesEffects } from './effects/schedules.effects';
import { TimelineService } from './services/timeline.service';
import { TimelineEffects } from './effects/timeline.effects';


import { kingsReducer } from './reducers/kings.reducer';
import { measurementsReducer } from './reducers/measurements.reducer';
import { schedulesReducer } from './reducers/schedules.reducer';
import { timelineReducer } from './reducers/timeline.reducer';

@NgModule({
  declarations: [
    MyApp,
    ExpanderComponent,
    KingsComponent,
    KingsTimelineComponent,
    PersonCardComponent,
    ScheduleItemComponent,
    ScheduleSettingsPopover,
    TimelineListModal,
    TimelineRowComponent,
    KingsListModal,
    ProfileModal,
    ReadingSchedulesComponent,
    ScheduleSectionComponent,
  ],
  imports: [
    BrowserModule,
    ConverterModule,
    DashboardModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({
      kings: kingsReducer,
      measurements: measurementsReducer,
      schedules: schedulesReducer,
      timeline: timelineReducer,
    }),
    EffectsModule.forRoot([KingsEffects, MeasurementsEffects, SchedulesEffects, TimelineEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KingsComponent,
    KingsTimelineComponent,
    KingsListModal,
    ProfileModal,
    TimelineListModal,
    ReadingSchedulesComponent,
    ScheduleSectionComponent,
    ScheduleSettingsPopover,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KingsService,
    MeasurementsService,
    SchedulesService,
    TimelineService,
  ]
})
export class AppModule {}
