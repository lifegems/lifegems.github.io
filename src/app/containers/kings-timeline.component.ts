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
      <div class="timeline--inner">
         <ion-grid class="timeline--grid" no-padding>
            <ion-row class="box box--1">
               <div *ngFor="let year of years" class="timeline timeline--year">{{year}} B.C.E.</div>
            </ion-row>
            <ion-row class="box box--2 box--color-1">
               <span class="box--title">KINGS OF JUDAH</span>
               <ol class="tl--items">
                  <li class="tl--item" *ngFor="let king of kings">
                     <span>{{king}}</span>
                  </li>
               </ol>
            </ion-row>
            <ion-row class="box box--2 box--color-2">
               <span class="box--title">KINGS OF SAMARIA</span>
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
   public years: number[];
   public kings: string[];

   constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

   ngOnInit() {
      this.years = this.listYears();
      this.kings = this.listKings();
   }

   listYears(): number[] {
      let years: number[] = [];
      for (let i = 1100; i >= 600; i = i - 10) {
         years.push(i);
      }
      return years;
   }

   listKings() {
      return [
         'Rehoboam', 'Abijah', 'Asa', 'Jehoshaphat', 'Jehoram',
         'Ahaziah', 'Athaliah', 'Jehoash', 'Amaziah', 'Uzziah',
         'Jotham', 'Ahaz', 'Hezekiah', 'Manasseh', 'Amon',
         'Josiah', 'Jehoahaz', 'Jehoiakim', 'Jehoiachin', 'Zedekiah'
      ];
   }

}