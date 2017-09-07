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
  ReadingSchedulesComponent, 
  ScheduleSectionComponent } from './containers';
import {
  ScheduleItemComponent,
  ScheduleSettingsPopover } from './components';

import { ConverterModule } from './pages/converter/converter.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { KingsModule }     from './pages/kings/kings.module';
import { TimelineModule }  from './pages/timeline/timeline.module';

import { SchedulesService } from './services/schedules.service';
import { SchedulesEffects } from './effects/schedules.effects';

import { schedulesReducer } from './reducers/schedules.reducer';

@NgModule({
  declarations: [
    MyApp,
    ScheduleItemComponent,
    ScheduleSettingsPopover,
    ReadingSchedulesComponent,
    ScheduleSectionComponent,
  ],
  imports: [
    BrowserModule,
    ConverterModule,
    DashboardModule,
    TimelineModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    KingsModule,
    StoreModule.forRoot({
      schedules: schedulesReducer,
    }),
    EffectsModule.forRoot([SchedulesEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReadingSchedulesComponent,
    ScheduleSectionComponent,
    ScheduleSettingsPopover,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SchedulesService,
  ]
})
export class AppModule {}
