import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      {{profile.name}}
    </ion-title>
    <ion-buttons>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Close</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
   <ion-card>
      <ion-card-content>
         <ion-card-title text-center>{{profile.name}}</ion-card-title>
         <ion-label text-center>{{getTimeFrame(profile.start, profile.end)}}</ion-label>
         <div text-center>
            <a outline ion-button [attr.href]="profile.url">
               Online Library&nbsp;
               <ion-icon name="md-open"></ion-icon>
            </a>
         </div>
      </ion-card-content>
   </ion-card>
</ion-content>
`
})
export class ProfileModal {
   public profile: any;

   constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
   ) {
      this.profile = this.params.get('profile');
   }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  getTimeFrame(start: number, end: number): string {
     let timeFrame: string = "";
     return ((start - end) <= 0) ? timeFrame = start + " B.C.E." : timeFrame = `${start} - ${end} B.C.E.`;
  }
}