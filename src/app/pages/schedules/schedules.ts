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
            <button ion-button icon-left clear small
               *ngIf="hasCheckpoints(s.checkpoints)"
               (click)="viewSchedule(s.schedule.id)">
               <ion-icon name="ios-eye-outline"></ion-icon>
               <div>View Schedule</div>
            </button>
            <p ion-text color="danger" text-center padding-top
               *ngIf="!hasCheckpoints(s.checkpoints)">
               <ion-icon name="md-warning"></ion-icon>
               No Checkpoints
            </p>
         </ion-col>
      </ion-row>
      <ion-list *ngIf="hasCheckpoints(s.checkpoints) && isScheduleComplete(s.schedule.id, (local$ | async), (checkpoints$ | async))">
         <ion-list-header color="secondary">
            Completed
            <ion-icon name="md-checkmark"></ion-icon>
         </ion-list-header>
      </ion-list>
      <ion-list *ngIf="hasCheckpoints(s.checkpoints) && !isScheduleComplete(s.schedule.id, (local$ | async), (checkpoints$ | async))">
         <app-schedule-section [schedule]="s.schedule" [checkpoint]="getNextCheckpoint(s, (checkpoints$ | async))" (tapCheckpoint)="handleTapSection(s.schedule, $event)"></app-schedule-section>
      </ion-list>
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
      let total    = this.getCheckpointsTotal(sid, localSchedules);
      let complete = this.getCheckpointsCompleted(sid, localCheckpoints);
      return `${complete}/${total}`;
   }

   getCheckpointsCompleted(sid, localCheckpoints) {
      let checkpoint = localCheckpoints.find(s => s.scheduleId == sid);
      return (checkpoint) ? checkpoint.checkpointIds.length : 0;
   }

   getCheckpointsTotal(sid, localSchedules) {
      let schedule   = localSchedules.find(s => sid == s.schedule.id);
      return (schedule) ? schedule.checkpoints.map(c => (c) ? c.sections.length : 0).reduce((a,b) => a + b, 0) : 0;
   }

   getNextCheckpoint(schedule, checkpoints) {
      let checks = checkpoints.find(c => c.scheduleId == schedule.schedule.id);
      return schedule.checkpoints.find(c => c.sections.map(s => s.id).filter(id => (checks) ? checks.checkpointIds.indexOf(id) === -1 : true).length > 0);
   }
   
   handleTapSection(schedule, section) {
      if (section.sections.length > 0) {
         this.navCtrl.push(ScheduleViewer, {
            schedule: {
               schedule: schedule,
               checkpoints: section.sections,
            }
         });
      } else {
         this.checkpoints$.subscribe(local => {
            this.checkpointsStore.dispatch(new checkpointsActions.InitSaveLocalCheckpointAction({
               local: local,
               scheduleId: schedule.id,
               checkpointId: section.id,
            }));
         }).unsubscribe();
      }
   }

   hasCheckpoints(checkpoints) {
      return (checkpoints) ? checkpoints.length > 0 : false;
   }

   isDownloading(id, downloading) {
      return downloading.indexOf(id) > -1;
   }

   isScheduleComplete(sid, localSchedules, localCheckpoints) {
      let total    = this.getCheckpointsTotal(sid, localSchedules);
      let complete = this.getCheckpointsCompleted(sid, localCheckpoints);
      return total === complete;
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