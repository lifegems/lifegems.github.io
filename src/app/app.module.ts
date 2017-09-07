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
  KingsTimelineComponent,
  ReadingSchedulesComponent, 
  ScheduleSectionComponent } from './containers';
import {
  ProfileModal,
  ScheduleItemComponent,
  ScheduleSettingsPopover,
  TimelineListModal,
  TimelineRowComponent } from './components';

import { ConverterModule } from './pages/converter/converter.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { KingsModule }     from './pages/kings/kings.module';

import { SchedulesService } from './services/schedules.service';
import { SchedulesEffects } from './effects/schedules.effects';
import { TimelineService } from './services/timeline.service';
import { TimelineEffects } from './effects/timeline.effects';

import { schedulesReducer } from './reducers/schedules.reducer';
import { timelineReducer } from './reducers/timeline.reducer';

@NgModule({
  declarations: [
    MyApp,
    KingsTimelineComponent,
    ScheduleItemComponent,
    ScheduleSettingsPopover,
    TimelineListModal,
    TimelineRowComponent,
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
    KingsModule,
    StoreModule.forRoot({
      schedules: schedulesReducer,
      timeline: timelineReducer,
    }),
    EffectsModule.forRoot([SchedulesEffects, TimelineEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KingsTimelineComponent,
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
    SchedulesService,
    TimelineService,
  ]
})
export class AppModule {}
