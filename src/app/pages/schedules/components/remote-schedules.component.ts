import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ItemSliding, PopoverController, NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as schedulesActions from '../actions/schedules.actions';
import * as schedulesReducer from '../reducers/schedules.reducer';

@Component({
template: `
   <ion-header>
      <ion-toolbar>
         <ion-title>Tap to Download</ion-title>
         <ion-buttons end>
            <button ion-button (click)="dismiss()">
               <span ion-text color="primary" showWhen="ios">Done</span>
               <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
            </button>
         </ion-buttons>
      </ion-toolbar>
   </ion-header>
   <ion-content>
      <ion-list>
         <ion-item-sliding #slideItem *ngFor="let s of (remote$ | async)">
            <ion-item (click)="downloadSchedule(s)">
               {{ s.name }}
               <!-- Not downloaded -->
               <ion-icon *ngIf="canDownload(s.id, (downloading$ | async), (local$ | async))" item-end name="ios-cloud-download-outline"></ion-icon>
               <!-- Downloading -->
               <ion-spinner item-end *ngIf="isDownloading(s.id, (downloading$ | async))" name="bubbles"></ion-spinner>
               <!-- Downloaded -->
               <ion-icon color="primary" *ngIf="wasDownloaded(s.id, (local$ | async))" item-end name="md-checkmark"></ion-icon>
            </ion-item>
            <ion-item-options side="right">
               <button *ngIf="wasDownloaded(s.id, (local$ | async))" color="danger" ion-button (click)="deleteSchedule(s.id, slideItem)">
                  <ion-icon name="md-trash"></ion-icon>
                  Delete
               </button>
            </ion-item-options>
         </ion-item-sliding> 
      </ion-list>
   </ion-content>
`
})
export class RemoteSchedulesModal implements OnInit {
   public downloading$: Store<Number[]>;
   public local$:       Store<any[]>;
   public remote$:      Store<any[]>;
   public schedule$:    Store<any>;

   constructor(private navParams: NavParams, private viewCtrl: ViewController, private store: Store<schedulesReducer.SchedulesState>) {
      this.store.dispatch(new schedulesActions.InitRemoteSchedulesAction());
   }

   ngOnInit() {
      this.downloading$ = this.store.select(schedulesReducer.getDownloading);
      this.local$       = this.store.select(schedulesReducer.getLocalSchedules);
      this.remote$      = this.store.select(schedulesReducer.getRemoteSchedules);
      this.schedule$    = this.store.select(schedulesReducer.getState);
   }

   dismiss() {
      this.viewCtrl.dismiss();
   }

   deleteSchedule(id, slideItem: ItemSliding) {
      this.store.dispatch(new schedulesActions.InitDeleteLocalScheduleAction(id));
      slideItem.close();
   }
   
   downloadSchedule(schedule) {
      this.schedule$.subscribe(state => {
         if (this.canDownload(schedule.id, state.downloading, state.local)) {
            this.store.dispatch(new schedulesActions.InitDownloadScheduleAction(schedule));
         }
      }).unsubscribe();
   }
   
   canDownload(id, downloading, local) {
      return !this.isDownloading(id, downloading) && !this.wasDownloaded(id, local);
   }
   
   isDownloading(id, downloading) {
      return downloading.indexOf(id) > -1;
   }
   
   wasDownloaded(id: number, local: any[]) {
      return (local.length > 0 && local.map(d => d.schedule.id).indexOf(id) > -1);
   }
}