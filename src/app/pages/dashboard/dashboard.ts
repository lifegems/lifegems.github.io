import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { ReadingSchedulesComponent } from '../../containers';

@IonicPage()
@Component({
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
               <i class="fa fa-balance-scale fa-2x"></i>
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
   </ion-content>
   
   <ion-footer>
     
   </ion-footer>
   `
})
export class DashboardComponent {
   constructor(private navCtrl: NavController) {}
   
   ngOnInit() {}

   navigateToApp(app: string) {
      switch (app) {
         case 'kings':
            this.navCtrl.setRoot('KingsComponent');
            break;
         case 'timeline':
            this.navCtrl.setRoot('TimelineComponent');
            break;
         case 'converter':
            this.navCtrl.setRoot('ConverterComponent');
            break;
         case 'schedules':
            this.navCtrl.setRoot(ReadingSchedulesComponent);
            break;
      }
   }
}