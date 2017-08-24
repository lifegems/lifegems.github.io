import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { ProfileModal } from '../components/profile.modal';
import * as TimelineActions from '../actions/timeline.actions';
import * as timelineState from '../reducers/timeline.reducer';

@Component({
selector: 'page-timeline',
template: `
<ion-header>
<ion-navbar>
   <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
   </button>
   <ion-title>Timeline</ion-title>
</ion-navbar>
</ion-header>

<ion-content no-padding>
   <div class="timeline--outer">
      <div [style.width]="getTimelineWidth(timelineData$ | async)" class="timeline--inner">
         <ion-grid class="timeline--grid" no-padding>
            <ion-row class="box box--1">
               <div [style.left]="getYearAlignment((timelineData$ | async), year)" *ngFor="let year of (years$ | async)" class="tl--year-marker">{{year}} B.C.E.</div>
            </ion-row>
            <ion-row class="box box--2">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="4" [rowNumber]="1" [items]="(items$ | async).kingsOfJudah"></app-timeline-row>
            </ion-row>
            <ion-row class="box box--2">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="4" [rowNumber]="2" [items]="(items$ | async).kingsOfSamaria"></app-timeline-row>
            </ion-row>
            <ion-row class="box box--2">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="4" [rowNumber]="3" [items]="(items$ | async).prophets"></app-timeline-row>
            </ion-row>
            <ion-row class="box box--2">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="4" [rowNumber]="4" [items]="(items$ | async).events"></app-timeline-row>
            </ion-row>
         </ion-grid>
      </div>
   </div>
</ion-content>

<ion-footer>

</ion-footer>
`
})
export class KingsTimelineComponent implements OnInit {
   public items$: Store<any>;
   public years$: Store<string[]>;
   public timelineData$: Store<{start: number, end: number, increment: number}>;

   constructor(
      public navCtrl: NavController,
      private store: Store<timelineState.TimelineState>
   ) {
      this.items$ = this.store.select(timelineState.getItems);
      this.years$ = this.store.select(timelineState.getYears);
      this.timelineData$ = this.store.select(timelineState.getTimelineData);
   }

   ngOnInit() {
      this.store.dispatch(new TimelineActions.InitTimelineAction());
   }

   pixelize(digit: number): string {
      return digit + 'px';
   }

   getTimelineWidth(timelineData: {start: number, end: number, increment: number}): string {
      return this.pixelize(this.getYearPosition(timelineData.start, timelineData.end) + 100);
   }

   getYearPosition(start: number, year: number): number {
      //   1 year  =   10px
      //  10 years =  100px
      // 100 years = 1000px
      return (start - year) * 10;
   }

   getYearAlignment(timelineData: {start: number, end: number, increment: number}, year: number): string {
      return this.pixelize(this.getYearPosition(timelineData.start, year));
   }
}