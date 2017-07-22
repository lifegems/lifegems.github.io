import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Choose King
    </ion-title>
    <ion-buttons>
      <button ion-button (click)="dismiss(0)">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
   <ion-list>
      <ion-item *ngFor="let king of (kings$ | async)" (click)="dismiss(king.kingNumber)">{{king.startReignYear}} - {{king.kingName}}</ion-item>
   </ion-list>
</ion-content>
`
})
export class KingsListModal {
   public kings$: Observable<any[]>;
   public selectedKing$: Observable<any>;

   constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
   ) {
      this.kings$ = this.params.get('kings');
      this.selectedKing$ = this.params.get('selectedKing');
   }

  dismiss(kingNumber) {
    if (kingNumber > 0) {
      this.viewCtrl.dismiss(kingNumber);
    } else {
      this.selectedKing$.subscribe((kingNo) => {
        this.viewCtrl.dismiss(kingNo);
      });
    }
  }
}