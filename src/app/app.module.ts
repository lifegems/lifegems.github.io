import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { KingsComponent } from './containers/kings/kings.component';
import { KingsListModal } from './components/kings-list/kings-list.modal';
import { PersonCardComponent } from './components/person-card/person-card.component';

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
    PersonCardComponent,
    KingsListModal
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
    KingsListModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KingsService
  ]
})
export class AppModule {}
