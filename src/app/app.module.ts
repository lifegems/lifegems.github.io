import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { KingsPage } from './pages/kings/kings';
import { KingsListModal } from './pages/kings/kings-list/kings-list.modal';
// import { ListPage } from './pages/list/list';

import { KingsService } from './services/kings.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { kingsReducer } from './reducers/kings.reducer';

@NgModule({
  declarations: [
    MyApp,
    KingsPage,
    // ListPage,
    KingsListModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({kings: kingsReducer}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KingsPage,
    // ListPage,
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
