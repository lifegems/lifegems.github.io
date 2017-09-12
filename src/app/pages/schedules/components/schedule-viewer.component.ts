import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Schedule, Section } from '../models/schedule.model';
import { ScheduleSettingsPopover } from '../components';
import { SchedulesComponent } from '../schedules';
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
      <ion-buttons end>
         <button ion-button icon-only>
         <ion-icon name="md-more"></ion-icon>
         </button>
      </ion-buttons>
   </ion-navbar>
</ion-header>

<ion-content no-padding>
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
   <ion-toolbar>
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
               scheduleId: this.schedule.schedule.schedule.id,
               checkpointId: section.id,
            }));
         }).unsubscribe();
      }
   }
}