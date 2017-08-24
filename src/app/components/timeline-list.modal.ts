import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TimelineItem } from '../models/timeline-item.model';

@Component({
   template: `
   <ion-header>
   <ion-toolbar>
      <ion-title>
         Select Groups
      </ion-title>
      <ion-buttons>
         <button ion-button (click)="dismiss()">
         <span ion-text color="primary" showWhen="ios">Cancel</span>
         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
         </button>
      </ion-buttons>
      <ion-buttons end>
         <button ion-button (click)="dismiss()">
            Save
         </button>
      </ion-buttons>
   </ion-toolbar>
   </ion-header>
   <ion-content>
      <ion-list radio-group>
         <ion-item *ngFor="let group of listAllGroups(items)">
            <ion-label>{{group}}</ion-label>
            <ion-checkbox [checked]="isGroupVisible(group, (groups))" (click)="selectGroup(group)"></ion-checkbox>
         </ion-item>
      </ion-list>
   </ion-content>
   `,
   styles: [`.selected {color: blue;}`]
})
export class TimelineListModal {
   public groups: string[];
   public items:  TimelineItem[];

   constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
   ) {
      this.groups = this.params.get('groups');
      this.items = this.params.get('items');
   }

   selectGroup(group: string) {
      let index = this.groups.indexOf(group);
      if (index > -1) {
         this.groups.splice(index, 1);
      } else {
         this.groups.push(group);
      }
   }

   isGroupVisible(group: string, groups: string[]) {
      return groups.indexOf(group) > -1;
   }

   listAllGroups(items: TimelineItem[]) {
      return new Set(items.map(item => item.group));
   }

   dismiss() {
      this.viewCtrl.dismiss({
         groups: this.groups
      });
   }
}