import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ScheduleSectionComponent } from './schedule-section.component';
import { Schedule, Section } from '../models/schedule.model';
import * as schedulesActions from '../actions/schedules.actions';
import * as schedulesReducer from '../reducers/schedules.reducer';

@Component({
  selector: 'page-schedules',
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
   <ion-list>
      <ion-item detail-push *ngFor="let schedule of (schedules$ | async)" (click)="showSection(schedule)">
         {{schedule.name}}
         <ion-icon *ngIf="schedule.sections.length > 0 && schedule.complete" color="secondary" name="md-checkmark-circle"></ion-icon>
      </ion-item>
   </ion-list>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class ReadingSchedulesComponent implements OnInit {
   public schedules$: Store<Schedule[]>;

   constructor(public navCtrl: NavController, public store: Store<schedulesReducer.SchedulesState>) {
      this.store.dispatch(new schedulesActions.InitSchedulesAction());
   }

   ngOnInit() {
      this.schedules$ = this.store.select(schedulesReducer.getSchedules);
   }

   showSection(section: Schedule) {
      this.navCtrl.push(ScheduleSectionComponent, {
         key: section.name,
         schedules: this.schedules$,
         section: section,
      });
   }
}