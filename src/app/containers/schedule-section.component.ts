import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams, PopoverController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Schedule, Section } from '../models/schedule.model';
import { ScheduleSettingsPopover } from '../components';
import { ReadingSchedulesComponent } from '../containers';
import * as schedulesActions from '../actions/schedules.actions';
import * as schedulesReducer from '../reducers/schedules.reducer';

@Component({
  selector: 'page-schedule-section',
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>{{section.name}}</ion-title>
    <ion-buttons end>
      <button ion-button icon-only (click)="showSettings($event)">
        <ion-icon name="md-more"></ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>

<ion-content>
   <ion-list>
      <ion-list-header *ngIf="hideCompleted" text-center color="primary">
         {{getHiddenText()}}
      </ion-list-header>
      <ng-template ngFor let-sect [ngForOf]="section.sections">
         <ion-item *ngIf="sectionCanAppear(sect)" (click)="tapSection(sect)">
            {{sect.name}} 
            <span *ngIf="sect.sections.length > 0" [style.color]="'gray'">({{getCompletenessText(sect.sections)}})</span>
            <ion-icon *ngIf="sect.sections.length > 0 && sect.complete" color="secondary" name="md-checkmark-circle"></ion-icon>

            <ion-icon *ngIf="sect.sections.length > 0" item-end name="ios-arrow-forward"></ion-icon>
            <ion-icon *ngIf="sect.sections.length == 0 && !sect.complete" item-end color="secondary" name="md-checkmark"></ion-icon>
            <ion-icon *ngIf="sect.sections.length == 0 && sect.complete" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
         </ion-item>
      </ng-template>
   </ion-list>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-title>{{getCompletenessText(section.sections)}}</ion-title>
  </ion-toolbar>
</ion-footer>
`
})
export class ScheduleSectionComponent implements OnInit {
   public key: string;
   public schedules$: Store<Schedule[]>;
   public section: Section;
   public hideCompleted: boolean = false;

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams, 
      public popCtrl: PopoverController,
      public store: Store<schedulesReducer.SchedulesState>
    ) {
      this.key        = this.navParams.get('key');
      this.schedules$ = this.navParams.get('schedules');
      this.section    = this.navParams.get('section');
   }

   ngOnInit() {}

   getCompletenessText(sections) {
      return sections.filter(sect => sect.complete).length + "/" + sections.length;
   }

   getHiddenText() {
      let completed = this.section.sections.filter(s => s.complete).length;
      return `${completed} items hidden`;
   }

   isSectionComplete(section: Section) {
      return (section.sections.filter(s => s.complete).length == section.sections.length);
   }

   markSchedule(sections: Section[], complete: boolean) {
      this.markAll(sections, complete);
      this.schedules$.subscribe(s => {
         this.store.dispatch(new schedulesActions.SaveScheduleAction({key: this.key, schedules: s}));
      }).unsubscribe();
   }

   markAll(sections: Section[], complete: boolean) {
      this.section.complete = (this.section.sections.filter(s => s.complete).length == this.section.sections.length);
      sections.forEach(s => {
         s.complete = complete;
         this.markAll(s.sections, complete);
      });
   }

   sectionCanAppear(section: Section): boolean {
      return !this.hideCompleted || (this.hideCompleted && !section.complete)
   }

   showSettings(ev) {
     let settings = this.popCtrl.create(ScheduleSettingsPopover, {
       hideCompleted: this.hideCompleted,
       markAll: this.isSectionComplete(this.section)
     });
     settings.present({ev: event});
     settings.onDidDismiss(data => {
       if (data && data.hasOwnProperty('hideCompleted')) {
          this.hideCompleted = data.hideCompleted;
       }
       if (data && data.hasOwnProperty('markAll') && data.markAll !== this.isSectionComplete(this.section)) {
          this.markSchedule(this.section.sections, data.markAll);
       }
       if (data && data.clearData) {
          this.store.dispatch(new schedulesActions.ClearScheduleAction(this.key));
          this.navCtrl.setRoot(ReadingSchedulesComponent);
       }
     });
   }

   tapSection(section: Section) {
      if (section.sections.length > 0) {
         this.navCtrl.push(ScheduleSectionComponent, {
            key: this.key,
            schedules: this.schedules$,
            section: section
         });
      } else {
         section.complete = !section.complete;
         this.section.complete = this.isSectionComplete(this.section);
         this.schedules$.subscribe(s => {
            this.store.dispatch(new schedulesActions.SaveScheduleAction({key: this.key, schedules: s}));
         }).unsubscribe();
      }
   }

   toggleComplete() {
      this.hideCompleted = !this.hideCompleted;
   }
}