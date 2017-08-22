import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';

@Component({
  selector: 'page-converter',
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Converter</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
   <ion-card>
      <ion-card-content no-padding>
         <ion-list>
            <ion-item>
               <ion-label>Type</ion-label>
               <ion-select>
                  <ion-option selected>Length</ion-option>
               </ion-select>
            </ion-item>
            <ion-item>
               <ion-label>Modern Measurement</ion-label>
               <ion-select>
                  <ion-option selected>Inches</ion-option>
                  <ion-option>Feet</ion-option>
                  <ion-option>Yards</ion-option>
                  <ion-option>Miles</ion-option>
               </ion-select>
            </ion-item>
            <ion-item>
               <ion-input placeholder="Enter measurement" type="text"></ion-input>
            </ion-item>
            <ion-item>
               <ion-label>Biblical Measurement</ion-label>
               <ion-select>
                  <ion-option selected>Cubits</ion-option>
                  <ion-option>Span</ion-option>
               </ion-select>
            </ion-item>
            <ion-item>
               <ion-input placeholder="Enter measurement" type="text"></ion-input>
            </ion-item>
         </ion-list>
      </ion-card-content>
   </ion-card>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class ConverterComponent implements OnInit {

   constructor(public navCtrl: NavController) {}

   ngOnInit() {}

}