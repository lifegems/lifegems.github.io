import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { ConverterComponent, KingsComponent, KingsTimelineComponent, ReadingSchedulesComponent } from '../containers';

@Component({
  selector: 'page-dashboard',
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Dashboard</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
   <ion-grid>
      <ion-row>
         <ion-col col-6>
            <ion-card>
               <ion-card-header>Kings</ion-card-header>
               <ion-card-content>
                  Cards listing some of the key information regarding the Judean Kings of Israel
               </ion-card-content>
               <button ion-button icon-left clear small (click)="navigateToApp('kings')">
                  <ion-icon name="md-navigate"></ion-icon>
                  <div>View App</div>
               </button>
            </ion-card>
         </ion-col>
         <ion-col col-6>
            <ion-card>
               <ion-card-header>Timeline</ion-card-header>
               <ion-card-content>
                  A customizable timeline for viewing significant events based on the Bible
               </ion-card-content>
               <button ion-button icon-left clear small (click)="navigateToApp('timeline')">
                  <ion-icon name="md-navigate"></ion-icon>
                  <div>View App</div>
               </button>
            </ion-card>
         </ion-col>
      </ion-row>
      <ion-row>
         <ion-col col-6>
            <ion-card>
               <ion-card-header>Units</ion-card-header>
               <ion-card-content>
                  A helpful tool in converting between various units of measurement
               </ion-card-content>
               <button ion-button icon-left clear small (click)="navigateToApp('converter')">
                  <ion-icon name="md-navigate"></ion-icon>
                  <div>View App</div>
               </button>
            </ion-card>
         </ion-col>
         <ion-col col-6>
            <ion-card>
               <ion-card-header>Schedules</ion-card-header>
               <ion-card-content>
                  Keep track of your reading progress through publication schedules
               </ion-card-content>
               <button ion-button icon-left clear small (click)="navigateToApp('schedules')">
                  <ion-icon name="md-navigate"></ion-icon>
                  <div>View App</div>
               </button>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class DashboardComponent implements OnInit {

   constructor(public navCtrl: NavController) {
      
   }

   ngOnInit() {
      
   }

   navigateToApp(app: string) {
      switch (app) {
         case 'kings':
            this.navCtrl.setRoot(KingsComponent);
            break;
         case 'timeline':
            this.navCtrl.setRoot(KingsTimelineComponent);
            break;
         case 'converter':
            this.navCtrl.setRoot(ConverterComponent);
            break;
         case 'schedules':
            this.navCtrl.setRoot(ReadingSchedulesComponent);
            break;
      }
   }
}