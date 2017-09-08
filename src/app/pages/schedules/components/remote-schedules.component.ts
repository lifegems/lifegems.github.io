import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, PopoverController, NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as schedulesActions from '../actions/schedules.actions';
import * as schedulesReducer from '../reducers/schedules.reducer';

@Component({
template: `
   <ion-header>
      <ion-toolbar>
         <ion-title>Tap to Download</ion-title>
         <ion-buttons>
         <button ion-button (click)="dismiss()">
            <span ion-text color="primary" showWhen="ios">Cancel</span>
            <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
         </button>
         </ion-buttons>
      </ion-toolbar>
   </ion-header>
   <ion-content>
      <ion-list>
         <ion-item *ngFor="let s of (schedules$ | async)">{{ s.name }}</ion-item>
      </ion-list>
   </ion-content>
`
})
export class RemoteSchedulesModal implements OnInit {
   public schedules$;

   constructor(private navParams: NavParams, private viewCtrl: ViewController, private store: Store<schedulesReducer.SchedulesState>) {
      // this.store.dispatch(new schedulesActions.InitRemoteSchedulesAction());
   }

   ngOnInit() {
      this.schedules$ = this.store.select(schedulesReducer.getRemoteSchedules);
   }

   dismiss() {
      this.viewCtrl.dismiss({});
   }
}