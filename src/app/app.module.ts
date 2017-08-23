import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ConverterComponent, KingsComponent, KingsTimelineComponent } from './containers';
import { KingsListModal } from './components/kings-list.modal';
import { ProfileModal } from './components/profile.modal';
import { PersonCardComponent } from './components/person-card.component';
import { ExpanderComponent } from './components/expander.component';

import { KingsService } from './services/kings.service';
import { KingsEffects } from './effects/kings.effects';
import { MeasurementsService } from './services/measurements.service';
import { MeasurementsEffects } from './effects/measurements.effects';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { kingsReducer } from './reducers/kings.reducer';
import { measurementsReducer } from './reducers/measurements.reducer';

@NgModule({
  declarations: [
    MyApp,
    ConverterComponent,
    KingsComponent,
    KingsTimelineComponent,
    PersonCardComponent,
    ExpanderComponent,
    KingsListModal,
    ProfileModal,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({kings: kingsReducer, measurements: measurementsReducer}),
    EffectsModule.forRoot([KingsEffects, MeasurementsEffects]),
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
  ]
})
export class AppModule {}
