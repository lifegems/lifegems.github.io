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
    <ion-buttons end>
      <button ion-button icon-only (click)="showDownloadableSchedules()">
        <ion-icon name="md-download"></ion-icon>
      </button>
    </ion-buttons>    
  </ion-navbar>
</ion-header>

<ion-content>
   <div text-center *ngIf="(local$ | async).length == 0">
      <h3><ion-icon name="md-sad"></ion-icon> No Schedules!</h3>
      <p>Tap <ion-icon color="primary" name="md-download"></ion-icon> to view schedules<br />available for download.</p>
   </div>
   <ion-card *ngFor="let s of (local$ | async)">
      <ion-card-header>
         {{s.schedule.name}}
      </ion-card-header>
      <ion-row>
         <ion-col padding-top text-center>
            {{ getCompletenessText(s.schedule.id, (local$ | async), (checkpoints$ | async)) }}
         </ion-col>
         <ion-col>
            <button ion-button icon-left clear small (click)="viewSchedule(s.schedule.id)">
               <ion-icon name="ios-eye-outline"></ion-icon>
               <div>View Schedule</div>
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
      this.scheduleStore.dispatch(new schedulesActions.InitLocalSchedulesAction());
      this.checkpointsStore.dispatch(new checkpointsActions.InitCheckpointsAction());
   }

   ngOnInit() {
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
      let schedule   = localSchedules.find(s => sid == s.schedule.id);
      let total      = (schedule) ? schedule.checkpoints.map(c => (c) ? c.sections.length : 0).reduce((a,b) => a + b) : 0;
      let checkpoint = localCheckpoints.find(s => s.scheduleId == sid);
      let complete   = (checkpoint) ? checkpoint.checkpointIds.length : 0;
      return `${complete}/${total}`;
   }

   isDownloading(id, downloading) {
      return downloading.indexOf(id) > -1;
   }

   showDownloadableSchedules() {
      this.modalCtrl.create(RemoteSchedulesModal).present();
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