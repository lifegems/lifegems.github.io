import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'page-timeline',
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Timeline</ion-title>
  </ion-navbar>
</ion-header>

<ion-content no-padding>
   <div class="timeline--outer">
      <div [style.width]="getTimelineWidth()" class="timeline--inner">
         <ion-grid class="timeline--grid" no-padding>
            <ion-row class="box box--1">
               <div [style.left]="getYearAlignment(year)" *ngFor="let year of listYears()" class="tl--year-marker">{{year}} B.C.E.</div>
            </ion-row>
            <ion-row class="box box--2">
               <!--<span class="box--title">KINGS OF JUDAH</span>-->
               <ol class="tl--items">
                  <li class="tl--item"
                     [ngClass]="[
                        'tl--row-2-' + king.tier,
                        isItemShort(king.start, king.end) ? 'tl--side-1':'tl--bg-1'
                     ]"
                     [style.border-left-width]="getBorderWidth(king.start, king.end)"
                     [style.left]="getYearAlignment(king.start)" 
                     [style.width]="getWidth(king.start, king.end)" 
                     *ngFor="let king of listKingsOfJudah()">
                     <span>{{king.name}}</span>
                  </li>
               </ol>
            </ion-row>
            <ion-row class="box box--2">
               <!--<span class="box--title">KINGS OF SAMARIA</span>-->
               <ol class="tl--items">
                  <li class="tl--item" 
                     [ngClass]="[
                        'tl--row-4-' + king.tier, 
                        isItemShort(king.start, king.end) ? 'tl--side-2':'tl--bg-2'
                     ]"
                     [style.border-left-width]="getBorderWidth(king.start, king.end)"
                     [style.left]="getYearAlignment(king.start)" 
                     [style.width]="getWidth(king.start, king.end)" 
                     *ngFor="let king of listKingsOfSamaria()">
                     <span>{{king.name}}</span>
                  </li>
               </ol>
            </ion-row>
            <ion-row class="box box--2 tl--color-3">
               <!--<span class="box--title">PROPHETS</span>-->
            </ion-row>
            <ion-row class="box box--2 tl--color-4">
               <!--<span class="box--title">HIGH PRIESTS</span>-->
            </ion-row>
         </ion-grid>
      </div>
   </div>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class KingsTimelineComponent implements OnInit {
   private timelineStart:     number = 1000;
   private timelineEnd:       number = 600;
   private timelineIncrement: number = 10;

   constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

   ngOnInit() {}

   listYears(): number[] {
      let years: number[] = [];
      for (let i = this.timelineStart; i >= this.timelineEnd; i = i - this.timelineIncrement) {
         years.push(i);
      }
      return years;
   }

   listKingsOfJudah(): any[] {
      return [
         { name: 'Rehoboam',    start: 997, end: 980, tier: 1 },
         { name: 'Abijah',      start: 980, end: 978, tier: 2 },
         { name: 'Asa',         start: 978, end: 937, tier: 1 },
         { name: 'Jehoshaphat', start: 937, end: 913, tier: 2 },
         { name: 'Jehoram',     start: 913, end: 906, tier: 1 },
         { name: 'Ahaziah',     start: 906, end: 905, tier: 2 },
         { name: 'Athaliah',    start: 905, end: 898, tier: 1 },
         { name: 'Jehoash',     start: 898, end: 858, tier: 2 },
         { name: 'Amaziah',     start: 858, end: 829, tier: 1 },
         { name: 'Uzziah',      start: 829, end: 777, tier: 2 },
         { name: 'Jotham',      start: 777, end: 762, tier: 1 },
         { name: 'Ahaz',        start: 762, end: 746, tier: 2 },
         { name: 'Hezekiah',    start: 746, end: 716, tier: 1 },
         { name: 'Manasseh',    start: 716, end: 661, tier: 2 },
         { name: 'Amon',        start: 661, end: 659, tier: 1 },
         { name: 'Josiah',      start: 659, end: 628, tier: 2 },
         { name: 'Jehoahaz',    start: 628, end: 628, tier: 1 },
         { name: 'Jehoiakim',   start: 628, end: 618, tier: 2 },
         { name: 'Jehoiachin',  start: 618, end: 617, tier: 1 },
         { name: 'Zedekiah',    start: 617, end: 607, tier: 2 },
      ];
   }

   listKingsOfSamaria(): any[] {
      return [
         { name: 'Jeroboam',    start: 997, end: 976, tier: 1 },
         { name: 'Nadab',       start: 976, end: 975, tier: 2 },
         { name: 'Baasha',      start: 975, end: 952, tier: 1 },
         { name: 'Elah',        start: 952, end: 951, tier: 1 },
         { name: 'Zimri',       start: 951, end: 951, tier: 2 },
         { name: 'Tibni',       start: 951, end: 947, tier: 3 },
         { name: 'Omri',        start: 951, end: 940, tier: 4 },
         { name: 'Ahab',        start: 940, end: 920, tier: 3 },
         { name: 'Ahaziah',     start: 920, end: 917, tier: 2 },
         { name: 'Jehoram',     start: 917, end: 905, tier: 1 },
         { name: 'Jehu',        start: 905, end: 876, tier: 2 },
         { name: 'Jehoahaz',    start: 876, end: 859, tier: 1 },
         { name: 'Jehoash',     start: 862, end: 844, tier: 2 },
         { name: 'Jeroboam II', start: 844, end: 803, tier: 1 },
         { name: 'Zechariah',   start: 803, end: 791, tier: 2 },
         { name: 'Shallum',     start: 791, end: 791, tier: 3 },
         { name: 'Menahem',     start: 791, end: 780, tier: 4 },
         { name: 'Pekahiah',    start: 780, end: 778, tier: 3 },
         { name: 'Pekah',       start: 778, end: 758, tier: 2 },
         { name: 'Hoshea',      start: 758, end: 740, tier: 1 },
      ];
   }

   pixelize(digit: number): string {
      return digit + 'px';
   }

   getYearPosition(year: number): number {
      //   1 year  =   10px
      //  10 years =  100px
      // 100 years = 1000px
      return (this.timelineStart - year) * 10;
   }

   getYearAlignment(year: number): string {
      return this.pixelize(this.getYearPosition(year));
   }

   getWidth(start: number, end: number): string {
      let width = this.getYearPosition(end) - this.getYearPosition(start);
      if (width === 0) {
         width = 100;
      } else if (this.isItemShort(start, end)) {
         width += 100;
      }
      return this.pixelize(width);
   }

   getBorderWidth(start: number, end: number): string {
      let width = this.getYearPosition(end) - this.getYearPosition(start);
      if (width === 0 || !this.isItemShort(start, end)) {
         width = 1;
      }
      return this.pixelize(width);
   }

   getTimelineWidth(): string {
      return this.pixelize(this.getYearPosition(this.timelineEnd) + 100);
   }

   isItemShort(start: number, end: number): boolean {
      return (start - end) < 5;
   }

}