import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { TimelineListModal } from '../components/timeline-list.modal';
import * as TimelineActions from '../actions/timeline.actions';
import * as timelineState from '../reducers/timeline.reducer';
import { TimelineItem } from '../models/timeline-item.model';

@Component({
selector: 'page-timeline',
template: `
<ion-header>
<ion-navbar>
   <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
   </button>
   <ion-title>Timeline</ion-title>
   <ion-buttons end>
      <button ion-button icon-only (click)="showGroupSelection(items$, groups$)">
         <ion-icon name="md-options"></ion-icon>
      </button>
   </ion-buttons>
</ion-navbar>
</ion-header>

<ion-content no-padding>
   <div class="timeline--outer">
      <div [style.width]="getTimelineWidth(timelineData$ | async)" class="timeline--inner">
         <ion-grid class="timeline--grid" no-padding>
            <ion-row class="box box--1">
               <div [style.left]="getYearAlignment((timelineData$ | async), year)" *ngFor="let year of (years$ | async)" class="tl--year-marker">{{year}} B.C.E.</div>
            </ion-row>
            <ion-row class="box box--2" *ngFor="let group of (groups$ | async); let i = index">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="getGroupRowCount((items$ | async), group)" [rowNumber]="i + 1" [items]="listGroupItems((items$ | async), group)"></app-timeline-row>
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
   public groups$: Store<string[]>;
   public items$: Store<TimelineItem[]>;
   public years$: Store<string[]>;
   public timelineData$: Store<{start: number, end: number, increment: number}>;

   constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      private store: Store<timelineState.TimelineState>
   ) {
      this.groups$ = this.store.select(timelineState.getGroups);
      this.items$ = this.store.select(timelineState.getItems);
      this.years$ = this.store.select(timelineState.getYears);
      this.timelineData$ = this.store.select(timelineState.getTimelineData);
   }

   ngOnInit() {
      this.store.dispatch(new TimelineActions.InitTimelineAction());
   }

   showGroupSelection(items$, groups$) {
      items$.subscribe(items => {
         groups$.subscribe(groups => {
            let modal = this.modalCtrl.create(TimelineListModal, {
               items: items,
               groups: groups
            });
            modal.present();
            modal.onDidDismiss((data) => {
               this.store.dispatch(new TimelineActions.SetGroupsAction(data.groups));
            });
         });
      });

   }

   getGroupRowCount(items: TimelineItem[], group: string): number {
      return this.listGroupItems(items, group).map(item => item.tier).reduce((a, b) => a > b ? a : b);
   }

   listGroupItems(items: TimelineItem[], group: string): TimelineItem[] {
      return items.filter(item => item.group == group);
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