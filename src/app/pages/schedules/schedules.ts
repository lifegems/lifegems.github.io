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
   <ion-card *ngFor="let s of (remote$ | async)">
      <ion-card-header>
         {{ s.name }}
      </ion-card-header>
      <ion-row>
         <ion-col>
            <button ion-button icon-left clear small
               [disabled]="isDownloading(s.id) || wasDownloaded(s.id, (local$ | async))"
               (click)="tapSchedule(s)">
               <ion-icon name="ios-cloud-download-outline"
                  *ngIf="!isDownloading(s.id)"></ion-icon>
               <ion-spinner name="bubbles"
                  *ngIf="isDownloading(s.id) && !wasDownloaded(s.id, (local$ | async))"></ion-spinner>
               <div>Download</div>
            </button>
         </ion-col>
         <ion-col center text-center>
            <button ion-button icon-left clear small
               [disabled]="!wasDownloaded(s.id, (local$ | async))"
               (click)="viewSchedule(s)">
               <ion-icon name="ios-eye-outline"></ion-icon>
               <div>View</div>
            </button>
         </ion-col>
      </ion-row>
   </ion-card>
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
      return (downloaded.length > 0 && downloaded.map(d => d.schedule.id).indexOf(id) > -1);
   }

   tapSchedule(s) {
      this.downloading.push(s.id);
      this.store.dispatch(new schedulesActions.InitDownloadScheduleAction(s));
   }

   viewSchedule(s) {
      alert("view the schedule");
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