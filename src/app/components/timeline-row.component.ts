import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';

import { ProfileModal } from '../components/profile.modal';

@Component({
   selector: 'app-timeline-row',
   template: `
   <ol class="tl--items">
      <li class="tl--item" 
      (click)="clickTimelineItem(item)"
         [ngClass]="[
            'tl--row-' + rows + '-' + item.tier, 
            isItemShort(item.start, item.end) ? 'tl--side-' + rowNumber :'tl--bg-' + rowNumber
         ]"
         [style.border-left-width]="getBorderWidth(timelineData, item.start, item.end)"
         [style.padding-left]="isItemShort(item.start, item.end) ? '0px' : '5px'"
         [style.left]="getYearAlignment(timelineData, item.start)"
         [style.width]="getWidth(timelineData, item.start, item.end)" 
         *ngFor="let item of items">
         <span class="tl--item-title">{{(isItemShort(item.start, item.end)) ? '&#9664; ' + item.name : item.name}}</span>
      </li>
   </ol>
   `,
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineRowComponent {
   @Input() rows: number;
   @Input() rowNumber: number;
   @Input() items: any[];
   @Input() timelineData: {start: number, end: number, increment: number};

   constructor(
      public navCtrl: NavController,
      public modalCtrl: ModalController
   ) {}

   clickTimelineItem(item) {
      let modal = this.modalCtrl.create(ProfileModal, {profile: item});
      modal.present();
   }

   pixelize(digit: number): string {
      return digit + 'px';
   }

   getYearPosition(start: number, year: number): number {
      //   1 year  =   10px
      //  10 years =  100px
      // 100 years = 1000px
      return (start - year) * 10;
   }

   getYearAlignment(timelineData: {start: number, end: number, increment: number}, year: number): string {
      return this.pixelize(this.getYearPosition(timelineData.start, year));
   }

   getWidth(timelineData: {start: number, end: number, increment: number}, start: number, end: number): string {
      let width = this.getYearPosition(timelineData.start, end) - this.getYearPosition(timelineData.start, start);
      if (width === 0) {
         width = 300;
      } else if (this.isItemShort(start, end)) {
         width += 100;
      }
      return this.pixelize(width);
   }

   getBorderWidth(timelineData: {start: number, end: number, increment: number}, start: number, end: number): string {
      let width = this.getYearPosition(timelineData.start, end) - this.getYearPosition(timelineData.start, start);
      if (width === 0 || !this.isItemShort(start, end)) {
         width = 1;
      }
      return this.pixelize(width);
   }

   isItemShort(start: number, end: number): boolean {
      return (start - end) < 5;
   }
}