import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RemoteSchedulesModal, ScheduleViewer } from './components';
import { Schedule, Section } from './models/schedule.model';
import * as schedulesActions from './actions/schedules.actions';
import * as schedulesReducer from './reducers/schedules.reducer';
import * as checkpointsActions from './actions/checkpoints.actions';
import * as checkpointsReducer from './reducers/checkpoints.reducer';

@IonicPage()
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Schedules</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
   <ion-card *ngFor="let s of (remote$ | async)">
      <ion-card-header>
         {{ s.name }}
      </ion-card-header>
      <ion-row>
         <ion-col padding-top text-center>
            <ion-note *ngIf="wasDownloaded(s.id, (local$ | async))">{{getCompletenessText(s.id, local$ | async, checkpoints$ | async)}}</ion-note>
         </ion-col>
         <ion-col center text-center>
            <button ion-button icon-left clear small
               *ngIf="isDownloading(s.id, (downloading$ | async)) || canDownload(s.id, (downloading$ | async), (local$ | async))"
               (click)="downloadSchedule(s)">
               <ion-icon name="ios-cloud-download-outline"
               *ngIf="!isDownloading(s.id, (downloading$ | async))"></ion-icon>
               <ion-spinner name="bubbles"
               *ngIf="isDownloading(s.id, (downloading$ | async))"></ion-spinner>
               <div>Download</div>
            </button>
            <button ion-button icon-left clear small
               *ngIf="wasDownloaded(s.id, (local$ | async))"
               (click)="viewSchedule(s.id)">
               <ion-icon name="ios-eye-outline"></ion-icon>
               <div>View</div>
            </button>
         </ion-col>
      </ion-row>
   </ion-card>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class SchedulesComponent implements OnInit {
   public remote$: Store<any[]>;
   public local$: Store<any[]>;
   public downloading$: Store<Number[]>;
   public checkpoints$: Store<any[]>;

   constructor(
      public modalCtrl: ModalController, 
      public navCtrl: NavController, 
      public scheduleStore: Store<schedulesReducer.SchedulesState>,
      public checkpointsStore: Store<checkpointsReducer.CheckpointsState>
   ) {
      this.scheduleStore.dispatch(new schedulesActions.InitSchedulesAction());
      this.checkpointsStore.dispatch(new checkpointsActions.InitCheckpointsAction());
   }

   ngOnInit() {
      this.remote$      = this.scheduleStore.select(schedulesReducer.getRemoteSchedules);
      this.local$       = this.scheduleStore.select(schedulesReducer.getLocalSchedules);
      this.downloading$ = this.scheduleStore.select(schedulesReducer.getDownloading);
      this.checkpoints$ = this.scheduleStore.select(checkpointsReducer.getLocalCheckpoints);
   }

   canDownload(id, downloading, local) {
      return !this.isDownloading(id, downloading) && !this.wasDownloaded(id, local);
   }
   
   downloadSchedule(s) {
      this.scheduleStore.dispatch(new schedulesActions.InitDownloadScheduleAction(s));
   }
   
   getCompletenessText(sid, localSchedules, localCheckpoints) {
      let schedule = localSchedules.find(s => s.id == sid);
      let completeIds = (schedule) ? schedule.checkpointIds.length : 0;
      // let total = localSchedule.map(c => c.sections.length).reduce((a, b) => a + b);
      // return `${schedule.checkpointIds.length}/${total}`;
      return "";//`2/${completeIds}`;
   }

   isDownloading(id, downloading) {
      return downloading.indexOf(id) > -1;
   }

   wasDownloaded(id: number, local: any[]) {
      return (local.length > 0 && local.map(d => d.schedule.id).indexOf(id) > -1);
   }

   viewSchedule(id) {
      this.local$.subscribe(schedules => {
         let schedule = schedules.find(s => s.schedule.id == id);
         this.navCtrl.push(ScheduleViewer, {
            schedule: schedule
         });
      }).unsubscribe();
   }
}