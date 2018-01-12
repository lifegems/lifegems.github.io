import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides, ToastController } from 'ionic-angular';
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
   <ion-segment (ngModelChange)="changeScheduleList($event)" [ngModel]="(list$ | async)" padding>
      <ion-segment-button value="pinned">
         Pinned
      </ion-segment-button>
      <ion-segment-button value="all">
         All
      </ion-segment-button>
   </ion-segment>

   <div text-center *ngIf="(local$ | async).length == 0">
      <h3><ion-icon name="md-sad"></ion-icon> No Schedules!</h3>
      <p>Tap <ion-icon (tap)="showDownloadableSchedules()" color="primary" name="md-download"></ion-icon> to view schedules<br />available for download.</p>
   </div>

   <div [ngSwitch]="list$ | async">
      <ng-template [ngSwitchCase]="'all'">
         <schedule-card
            *ngFor="let s of (local$ | async)"
            (onViewSchedule)="viewSchedule($event)"
            (onTapCheckpoint)="handleTapSection(s.schedule, $event)"
            (onTapPin)="pinSchedule(s.schedule.id)"
            (onTapUnpin)="unpinSchedule(s.schedule.id)"
            [schedule]="s"
            [pinned]="pinned$ | async"
            [checkpoints]="(checkpoints$ | async)">
         </schedule-card>
      </ng-template>

      <ng-template [ngSwitchCase]="'pinned'">
         <div text-center *ngIf="(pinned$ | async).length == 0 && (local$ | async).length > 0">
            <h3>No pinned schedules yet!</h3>
            <p>Pin a schedule by using <i class="far fa-thumbtack" data-fa-transform="rotate-45"></i></p>
         </div>
         <schedule-card
            *ngFor="let s of getPinnedSchedules((local$ | async), (pinned$ | async))"
            (onViewSchedule)="viewSchedule($event)"
            (onTapCheckpoint)="handleTapSection(s.schedule, $event)"
            (onTapPin)="pinSchedule(s.schedule.id)"
            (onTapUnpin)="unpinSchedule(s.schedule.id)"
            [schedule]="s"
            [pinned]="pinned$ | async"
            [checkpoints]="(checkpoints$ | async)">
         </schedule-card>
      </ng-template>
   </div>
</ion-content>

<ion-footer>

</ion-footer>
`
})
export class SchedulesComponent implements OnInit {
   public remote$: Store<any[]>;
   public list$: Store<string>;
   public local$: Store<any[]>;
   public pinned$: Store<number[]>;
   public downloading$: Store<Number[]>;
   public checkpoints$: Store<any[]>;

   constructor(
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public scheduleStore: Store<schedulesReducer.SchedulesState>,
      public checkpointsStore: Store<checkpointsReducer.CheckpointsState>,
      public toast: ToastController
   ) {
      this.scheduleStore.dispatch(new schedulesActions.InitLocalSchedulesAction());
      this.scheduleStore.dispatch(new schedulesActions.PinnedLoadedAction());
      this.checkpointsStore.dispatch(new checkpointsActions.InitCheckpointsAction());
   }

   ngOnInit() {
      this.list$ = this.scheduleStore.select(schedulesReducer.getList);
      this.local$ = this.scheduleStore.select(schedulesReducer.getLocalSchedules);
      this.pinned$ = this.scheduleStore.select(schedulesReducer.getPinned);
      this.downloading$ = this.scheduleStore.select(schedulesReducer.getDownloading);
      this.checkpoints$ = this.scheduleStore.select(checkpointsReducer.getLocalCheckpoints);
   }

   changeScheduleList(scheduleListName) {
      this.scheduleStore.dispatch(new schedulesActions.ChangeScheduleListAction(scheduleListName));
   }

   getPinnedSchedules(schedules: any[], pinned: number[]) {
      return schedules.filter(s => pinned.indexOf(s.schedule.id) > -1);
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

   showDownloadableSchedules() {
      this.modalCtrl.create(RemoteSchedulesModal).present();
   }

   viewSchedule(id) {
      this.local$.subscribe(schedules => {
         let schedule = schedules.find(s => s.schedule.id == id);
         this.navCtrl.push(ScheduleViewer, {
            schedule: schedule
         });
      }).unsubscribe();
   }

   pinSchedule(id) {
      this.scheduleStore.dispatch(new schedulesActions.PinScheduleAction(id));
   }

   unpinSchedule(id) {
      this.scheduleStore.dispatch(new schedulesActions.UnpinScheduleAction(id));
   }
}
