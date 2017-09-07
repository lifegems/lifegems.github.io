   import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';

   import { PopoverController, NavParams, ViewController } from 'ionic-angular';


@Component({
template: `
   <ion-list>
      <button ion-button color="danger" full icon-start (click)="clearData()">
         <ion-icon name="md-trash"></ion-icon>
         Reset Schedule
      </button>
      <ion-item>
         <ion-label>Hide completed</ion-label>
         <ion-checkbox [(ngModel)]="hideCompleted"></ion-checkbox>
      </ion-item>
      <ion-item>
         <ion-label>Mark all</ion-label>
         <ion-checkbox [(ngModel)]="markAll"></ion-checkbox>
      </ion-item>
      <button ion-button clear full icon-start (click)="closePopover()">
         <ion-icon name="md-checkmark"></ion-icon>
         Save Settings
      </button>
   </ion-list>
`
})
export class ScheduleSettingsPopover implements OnInit {
   public hideCompleted: boolean;
   public markAll: boolean;

   constructor(private navParams: NavParams, private viewCtrl: ViewController) {

   }

   ngOnInit() {
      this.hideCompleted = this.navParams.data.hideCompleted;
      this.markAll       = this.navParams.data.markAll;
   }

   closePopover() {
      this.viewCtrl.dismiss({
         hideCompleted: this.hideCompleted,
         markAll:       this.markAll,
      });
   }

   clearData() {
      if (confirm("Warning! Schedule progress will be lost. Are you sure you want to continue?")) {
         this.viewCtrl.dismiss({
            clearData: true
         });
      }
   }
}