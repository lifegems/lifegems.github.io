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
            <ion-row class="timeline--line">line</ion-row>
            <ion-row class="box box--red">red</ion-row>
            <ion-row class="box box--blue">blue</ion-row>
            <ion-row class="box box--yellow">yellow</ion-row>
            <ion-row class="box box--green">green</ion-row>
         </ion-grid>
      </div>
   </div>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class KingsTimelineComponent implements OnInit {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ngOnInit() {}

}
