import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TimelineItem } from '../models/timeline-item.model';

@Component({
   template: `
   <ion-header>
   <ion-toolbar>
      <ion-title>
         Timeline Groups
      </ion-title>
      <ion-buttons>
         <button ion-button (click)="dismiss('cancel')">
         <span ion-text color="primary" showWhen="ios">Cancel</span>
         <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
         </button>
      </ion-buttons>
      <ion-buttons end>
         <button ion-button (click)="dismiss('save')" [disabled]="groups.length > 6">
            Save
         </button>
      </ion-buttons>
   </ion-toolbar>
   </ion-header>
   <ion-content>
      <ion-list radio-group>
         <ion-item-divider text-center
            [style.backgroundColor]="(groups.length > 6) ? 'red' : 'lightgray'"
            [style.color]="(groups.length > 6) ? 'white' : 'black'">Choose up to 6 groups</ion-item-divider>
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
      this.params.get('groups').subscribe(groups => this.groups = Object.assign([], groups));
      this.params.get('items').subscribe(items => this.items = items);
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

   dismiss(message: string) {
      let data = {};
      switch (message) {
         case 'save':
            data = { groups: this.groups };
            break;
         default:
            data = {};
            break;
      }
      this.viewCtrl.dismiss(data);
   }
}