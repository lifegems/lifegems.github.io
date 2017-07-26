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
            <ion-row class="box box--2 box--color-1">
               <span class="box--title">KINGS OF JUDAH</span>
               <ol class="tl--items">
                  <li [style.left]="getYearAlignment(king.start)" [style.width]="getWidth(king.start, king.end)" class="tl--item" *ngFor="let king of listKingsOfJudah()">
                     <span>{{king.name}}</span>
                  </li>
               </ol>
            </ion-row>
            <ion-row class="box box--2 box--color-2">
               <span class="box--title">KINGS OF SAMARIA</span>
               <ol class="tl--items">
                  <li [style.left]="getYearAlignment(king.start)" [style.width]="getWidth(king.start, king.end)" class="tl--item" *ngFor="let king of listKingsOfSamaria()">
                     <span>{{king.name}}</span>
                  </li>
               </ol>
            </ion-row>
            <ion-row class="box box--2 box--color-3">
               <span class="box--title">PROPHETS</span>
            </ion-row>
            <ion-row class="box box--2 box--color-4">
               <span class="box--title">HIGH PRIESTS</span>
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
         { name: 'Rehoboam',    start: 997, end: 980 },
         { name: 'Abijah',      start: 980, end: 978 },
         { name: 'Asa',         start: 978, end: 937 },
         { name: 'Jehoshaphat', start: 937, end: 913 },
         { name: 'Jehoram',     start: 913, end: 906 },
         { name: 'Ahaziah',     start: 906, end: 905 },
         { name: 'Athaliah',    start: 905, end: 898 },
         { name: 'Jehoash',     start: 898, end: 858 },
         { name: 'Amaziah',     start: 858, end: 829 },
         { name: 'Uzziah',      start: 829, end: 777 },
         { name: 'Jotham',      start: 777, end: 762 },
         { name: 'Ahaz',        start: 762, end: 746 },
         { name: 'Hezekiah',    start: 746, end: 716 },
         { name: 'Manasseh',    start: 716, end: 661 },
         { name: 'Amon',        start: 661, end: 659 },
         { name: 'Josiah',      start: 659, end: 628 },
         { name: 'Jehoahaz',    start: 628, end: 628 },
         { name: 'Jehoiakim',   start: 628, end: 618 },
         { name: 'Jehoiachin',  start: 618, end: 617 },
         { name: 'Zedekiah',    start: 617, end: 607 },
      ];
   }

   listKingsOfSamaria(): any[] {
      return [
         { name: 'Jeroboam',             start: 997, end: 976 },
         { name: 'Nadab',                start: 976, end: 975 },
         { name: 'Baasha',               start: 975, end: 952 },
         { name: 'Elah',                 start: 952, end: 951 },
         { name: 'Zimri',                start: 951, end: 951 },
         { name: 'Omri and Tibni',       start: 951, end: 947 },
         { name: 'Omri',                 start: 947, end: 940 },
         { name: 'Ahab',                 start: 940, end: 920 },
         { name: 'Ahaziah',              start: 920, end: 917 },
         { name: 'Jehoram',              start: 917, end: 905 },
         { name: 'Jehu',                 start: 905, end: 876 },
         { name: 'Jehoahaz',             start: 876, end: 862 },
         { name: 'Jehoahaz and Jehoash', start: 862, end: 859 },
         { name: 'Jehoash',              start: 859, end: 844 },
         { name: 'Jeroboam II',          start: 844, end: 803 },
         { name: 'Zechariah',            start: 803, end: 791 },
         { name: 'Shallum',              start: 791, end: 791 },
         { name: 'Menahem',              start: 791, end: 780 },
         { name: 'Pekahiah',             start: 780, end: 778 },
         { name: 'Pekah',                start: 778, end: 758 },
         { name: 'Hoshea',               start: 758, end: 740 },
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
      return this.pixelize(this.getYearPosition(end) - this.getYearPosition(start));
   }

   getTimelineWidth(): string {
      return this.pixelize(this.getYearPosition(this.timelineEnd) + 100);
   }

}