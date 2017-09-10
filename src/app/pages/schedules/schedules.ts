import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RemoteSchedulesModal, ScheduleSectionComponent } from './components';
import { Schedule, Section } from './models/schedule.model';
import * as schedulesActions from './actions/schedules.actions';
import * as schedulesReducer from './reducers/schedules.reducer';

@IonicPage()
@Component({
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
      <ion-item *ngFor="let s of (remote$ | async)" (click)="tapSchedule(s)">
         {{ s.name }}
         <ion-icon name="ios-cloud-download-outline" item-end *ngIf="!wasDownloaded(s.id, (local$ | async)) && !isDownloading(s.id)"></ion-icon>
         <ion-spinner name="bubbles" item-end *ngIf="!wasDownloaded(s.id, (local$ | async)) && isDownloading(s.id)"></ion-spinner>
      </ion-item>
      <!--<ion-item detail-push *ngFor="let schedule of (remote$ | async)" (click)="showSection(schedule)">
         {{schedule.name}}
         <ion-icon *ngIf="schedule.sections.length > 0 && schedule.complete" color="secondary" name="md-checkmark-circle"></ion-icon>
      </ion-item>-->
   </ion-list>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class SchedulesComponent implements OnInit {
   public remote$: Store<any[]>;
   public local$: Store<any[]>;
   public downloading: Number[] = [];

   constructor(public modalCtrl: ModalController, public navCtrl: NavController, public store: Store<schedulesReducer.SchedulesState>) {
      this.store.dispatch(new schedulesActions.InitSchedulesAction());
   }

   ngOnInit() {
      this.remote$ = this.store.select(schedulesReducer.getRemoteSchedules);
      this.local$ = this.store.select(schedulesReducer.getLocalSchedules);
   }

   isDownloading(id) {
      return this.downloading.indexOf(id) > -1;
   }

   wasDownloaded(id: number, downloaded: any[]) {
      console.log(downloaded);
      return (downloaded.length > 0 && downloaded.map(d => d.schedule.id).indexOf(id) > -1);
   }

   tapSchedule(s) {
      // if downloaded, show items
      this.local$.subscribe(local => {
         if (this.wasDownloaded(s.id, local)) {
            alert("show schedule");
         } else {
            // otherwise download
            this.downloading.push(s.id);
            this.store.dispatch(new schedulesActions.InitDownloadScheduleAction(s));
         }
      }).unsubscribe();
   }

   /* deprecated functions */
   showSection(section: Schedule) {
      this.navCtrl.push(ScheduleSectionComponent, {
         key: section.name,
         schedules: this.remote$,
         section: section,
      });
   }
}