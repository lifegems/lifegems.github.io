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

<ion-content>
  
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class KingsTimelineComponent implements OnInit {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ngOnInit() {}

}
