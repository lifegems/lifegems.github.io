import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { KingsComponent } from './containers/kings/kings.component';
import { KingsTimelineComponent } from './containers/kings-timeline.component';
import { KingsListModal } from './components/kings-list.modal';
import { ProfileModal } from './components/profile.modal';
import { PersonCardComponent } from './components/person-card.component';
import { ExpanderComponent } from './components/expander.component';

import { KingsService } from './services/kings.service';
import { KingsEffects } from './effects/kings.effects';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { kingsReducer } from './reducers/kings.reducer';

@NgModule({
  declarations: [
    MyApp,
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
    StoreModule.forRoot({kings: kingsReducer}),
    EffectsModule.forRoot([KingsEffects]),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KingsComponent,
    KingsTimelineComponent,
    KingsListModal,
    ProfileModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KingsService
  ]
})
export class AppModule {}
