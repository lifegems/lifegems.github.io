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
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('kings')">
                  <ion-icon name="md-person"></ion-icon>
               </ion-card-header>
            </ion-card>
            <div text-center>Kings</div>
         </ion-col>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('timeline')">
                  <ion-icon name="md-options"></ion-icon>
               </ion-card-header>
            </ion-card>
            <div text-center>Timeline</div>
         </ion-col>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('converter')">
                  <ion-icon name="md-swap"></ion-icon>
               </ion-card-header>
            </ion-card>
            <div text-center>Converter</div>
         </ion-col>
      </ion-row>
      <ion-row>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('schedules')">
                  <ion-icon name="md-book"></ion-icon>
               </ion-card-header>
            </ion-card>
            <div text-center>Schedules</div>
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