import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as checkpointsActions from '../actions/checkpoints.actions';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
  selector: 'page-schedule-section',
  template: `
<ion-header>
   <ion-navbar>
      <button ion-button menuToggle>
         <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title></ion-title>
   </ion-navbar>
</ion-header>

<ion-content no-padding>
   <h2 text-center>{{schedule.schedule.name}}</h2>
   <ion-list>
      <ng-template ngFor let-checkpoint [ngForOf]="schedule.checkpoints">
         <ion-item-divider>{{checkpoint.name}}</ion-item-divider>
         <ng-template ngFor let-section [ngForOf]="checkpoint.sections">
            <app-schedule-item [section]="section" (tapSection)="handleTapSection($event)"></app-schedule-item>
         </ng-template>
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

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams, 
      public store: Store<checkpointsReducer.CheckpointsState>
   ) {
      this.schedule = (this.navParams.get('schedule'));
   }

   ngOnInit() {
      this.checkpoints$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
   }

   getCompletenessText(checkpoints, local) {
      let schedule = local.find(c => c.scheduleId == this.schedule.schedule.id);
      let total = checkpoints.map(c => c.sections.length).reduce((a, b) => a + b);
      return `${schedule.checkpointIds.length}/${total}`;
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
}