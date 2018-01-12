import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as checkpointsActions from '../actions/checkpoints.actions';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';
import * as schedulesReducer from '../reducers/schedules.reducer';
import * as schedulesActions from '../actions/schedules.actions';

@Component({
   selector: 'page-schedule-section',
   template: `
<ion-header>
   <ion-navbar>
      <button ion-button menuToggle>
         <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title></ion-title>
      <ion-buttons end>
         <!-- <a [href]="getExportScheduleJSON(schedule)" download="{{getExportScheduleName(schedule.schedule)}}">
            <i class="fa fa-external-link"></i>
         </a> -->
         <button *ngIf="!isPinned(pinned$ | async)" ion-button icon-only (click)="pinSchedule()">
            <i class="far fa-thumbtack" data-fa-transform="rotate-45 left-3"></i>
         </button>
         <button *ngIf="isPinned(pinned$ | async)" ion-button icon-only (click)="unpinSchedule()">
            <span class="fa-layers">
               <i class="fas fa-thumbtack" data-fa-transform="rotate-45 left-3"></i>
            </span>
         </button>
      </ion-buttons>
   </ion-navbar>
</ion-header>

<ion-content no-padding>
   <h2 text-center>{{schedule.schedule.name}}</h2>
   <ion-list>
      <ng-template ngFor let-checkpoint [ngForOf]="schedule.checkpoints">
         <app-schedule-section [schedule]="schedule.schedule" [checkpoint]="checkpoint" (tapCheckpoint)="handleTapSection($event)" (tapPrevCheckpoints)="handleTapPrevSection($event)"></app-schedule-section>
      </ng-template>
   </ion-list>
</ion-content>

<ion-footer>
   <ion-toolbar text-center>
      Progress - {{getCompletenessText(schedule.checkpoints, checkpoints$ | async)}}
   </ion-toolbar>
</ion-footer>
`
})
export class ScheduleViewer implements OnInit {
   public schedule: any;
   public checkpoints$: Store<any[]>;
   public pinned$: Store<any[]>;

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public store: Store<checkpointsReducer.CheckpointsState>,
      public sanitizer: DomSanitizer,
      public toast: ToastController
   ) {
      this.schedule = (this.navParams.get('schedule'));
   }

   ngOnInit() {
      this.checkpoints$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
      this.pinned$ = this.store.select(schedulesReducer.getPinned);
   }

   getCompletenessText(checkpoints, local) {
      let schedule = local.find(c => c.scheduleId == this.schedule.schedule.id);
      let complete = (schedule) ? schedule.checkpointIds.length : 0;
      let total = checkpoints.map(c => c.sections.length).reduce((a, b) => a + b, 0);
      return `${complete}/${total}`;
   }

   getExportScheduleJSON(schedule) {
      let jsonBlob = JSON.stringify(schedule);
      let uriComp = encodeURIComponent(jsonBlob);
      let uri = `data:application/json;charset=utf-8,${uriComp}`;
      return this.sanitizer.bypassSecurityTrustUrl(uri);
   }

   getExportScheduleName(schedule) {
      return `${schedule.code}.v${schedule.version}.json`;
   }

   handleTapSection(section) {
      if (section.sections.length > 0) {
         this.navCtrl.push(ScheduleViewer, {
            schedule: {
               schedule: this.schedule,
               checkpoints: section.sections,
            }
         });
      } else {
         this.checkpoints$.subscribe(local => {
            this.store.dispatch(new checkpointsActions.InitSaveLocalCheckpointAction({
               local: local,
               scheduleId: this.schedule.schedule.id,
               checkpointId: section.id,
            }));
         }).unsubscribe();
      }
   }

   handleTapPrevSection(section) {
      let prevCheckpoints: number[] = [].concat(...this.schedule.checkpoints.map(c => c.sections)).map(s => s.id).filter(c => c < section.id);
      this.checkpoints$.subscribe(checkpoints => {
         let otherCheckpoints: any[] = checkpoints.filter(s => this.schedule.schedule.id !== s.scheduleId);
         let theseCheckpoints: { checkpointIds: number[] } = checkpoints.find(s => this.schedule.schedule.id === s.scheduleId);
         theseCheckpoints.checkpointIds = [
            ...theseCheckpoints.checkpointIds,
            ...prevCheckpoints
         ].filter((el, i, a) => i === a.indexOf(el));

         let updatedCheckpoints = [...otherCheckpoints, theseCheckpoints];
         this.store.dispatch(new checkpointsActions.InitSaveLocalCheckpointAction({
            local: updatedCheckpoints,
            scheduleId: this.schedule.schedule.id,
            checkpointId: section.id,
         }));
      }).unsubscribe();
   }

   isPinned(pinnedSchedules: any[]) {
      return pinnedSchedules.filter(p => p === this.schedule.schedule.id).length > 0;
   }

   pinSchedule() {
      this.store.dispatch(new schedulesActions.PinScheduleAction(this.schedule.schedule.id));
      this.toast.create({
         message: `This schedule is now pinned.`,
         duration: 2000,
         position: 'middle'
      }).present();
   }

   unpinSchedule() {
      this.store.dispatch(new schedulesActions.UnpinScheduleAction(this.schedule.schedule.id));
      this.toast.create({
         message: `This schedule is now unpinned.`,
         duration: 2000,
         position: 'middle'
      }).present();
   }
}
