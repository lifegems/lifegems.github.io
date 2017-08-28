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
   <div class="apps--grid">
      <div class="app" (click)="navigateToApp('kings')">
         <div class="app--icon app--icon--purple">
            <i class="fa fa-user fa-2x"></i>
         </div>
         <div class="app--title">Kings</div>
      </div>
      <div class="app" (click)="navigateToApp('timeline')">
         <div class="app--icon app--icon--green">
            <i class="fa fa-sliders-h fa-2x"></i>
         </div>
         <div class="app--title">Timeline</div>
      </div>
      <div class="app" (click)="navigateToApp('converter')">
         <div class="app--icon app--icon--skyblue">
            <i class="fa fa-sliders-h fa-2x"></i>
         </div>
         <div class="app--title">Converter</div>
      </div>
      <div class="app" (click)="navigateToApp('schedules')">
         <div class="app--icon app--icon--gray">
            <i class="fa fa-book fa-2x"></i>
         </div>
         <div class="app--title">Schedules</div>
      </div>
   </div>
   <!--<ion-grid>
      <ion-row>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('kings')">
                  <div style="color:purple"><i class="fa fa-user"></i></div>
               </ion-card-header>
            </ion-card>
            <div text-center>Kings</div>
         </ion-col>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('timeline')">
                  <div style="color:green"><i class="fa fa-sliders-h"></i></div>
               </ion-card-header>
            </ion-card>
            <div text-center>Timeline</div>
         </ion-col>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('converter')">
                  <div style="color:skyblue"><i class="fa fa-balance-scale"></i></div>
               </ion-card-header>
            </ion-card>
            <div text-center>Converter</div>
         </ion-col>
      </ion-row>
      <ion-row>
         <ion-col col-4>
            <ion-card>
               <ion-card-header text-center (click)="navigateToApp('schedules')">
                  <div style="color:gray"><i class="fa fa-book"></i></div>
               </ion-card-header>
            </ion-card>
            <div text-center>Schedules</div>
         </ion-col>
      </ion-row>
   </ion-grid>-->
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