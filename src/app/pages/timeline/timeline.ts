import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { TimelineListModal } from './components/timeline-list.modal';
import * as TimelineActions from './actions/timeline.actions';
import * as timelineState from './reducers/timeline.reducer';
import { TimelineItem } from './models/timeline-item.model';

@IonicPage({
   name: 'TimelineComponent'
})
@Component({
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
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="1" [rowNumber]="1" [items]="listYearItems(years$ | async)"></app-timeline-row>
            </ion-row>
            <ion-row class="box box--2" *ngFor="let group of (groups$ | async); let i = index">
               <app-timeline-row [timelineData]="(timelineData$ | async)" [rows]="getGroupRowCount((items$ | async), group)" [rowNumber]="i + 1" [items]="listGroupItems((items$ | async), group)"></app-timeline-row>
            </ion-row>
         </ion-grid>
      </div>
   </div>
   <ion-fab right bottom>
      <button ion-fab><ion-icon name="md-settings"></ion-icon></button>
      <ion-fab-list side="left">
         <button ion-fab mini
            [ngClass]="{'disabled':(timelineData$ | async).increment <= 1}"
            [disabled]="(timelineData$ | async).increment <= 1"
            (click)="zoomIn()"><ion-icon name="md-add"></ion-icon></button>
         <button ion-fab mini
            [ngClass]="{'disabled':(timelineData$ | async).increment >= 50}"
            [disabled]="(timelineData$ | async).increment >= 50"
            (click)="zoomOut()"><ion-icon name="md-remove"></ion-icon></button>
      </ion-fab-list>
   </ion-fab>
</ion-content>

<ion-footer>

</ion-footer>
`
})
export class TimelineCommponent implements OnInit {
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
      let modal = this.modalCtrl.create(TimelineListModal, {
         items: items$,
         groups: groups$
      });
      modal.present();
      modal.onDidDismiss((data) => {
         if (data && data.groups && data.groups.length <= 6) {
            this.store.dispatch(new TimelineActions.SetGroupsAction(data.groups));
         }
      });
   }

   getGroupRowCount(items: TimelineItem[], group: string): number {
      return this.listGroupItems(items, group).map(item => item.tier).reduce((a, b) => a > b ? a : b);
   }

   getTimelineWidth(timelineData: {start: number, end: number, increment: number}): string {
      return ((timelineData.start - timelineData.end) * timelineData.increment) + 'px';
   }

   listGroupItems(items: TimelineItem[], group: string): TimelineItem[] {
      return items.filter(item => item.group == group);
   }

   listYearItems(years: number[]): TimelineItem[] {
      return years.filter(y => y <= 4100).map(year => {
         return {
            name: (year == 4100) ? "Creation" : `${year} B.C.E.`,
            start: year,
            end:   year,
            tier:  1,
            url:   "",
            group: "TIMELINE_DATES"
         }
      });
   }

   zoomIn() {
      this.store.dispatch(new TimelineActions.ZoomInAction());
   }

   zoomOut() {
      this.store.dispatch(new TimelineActions.ZoomOutAction());
   }
}