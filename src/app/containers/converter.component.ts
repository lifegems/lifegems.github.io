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
      <ion-card-header no-padding>
         <ion-list>
            <ion-item>
               <ion-label>Measurement Type</ion-label>
               <ion-select style="font-size:12px">
                  <ion-option selected>Length</ion-option>
               </ion-select>
            </ion-item>
          </ion-list>
      </ion-card-header>
      <ion-card-content no-padding>
         <ion-list>
            <ion-item>
               <ion-input [(ngModel)]="valueA" (change)="updateValueB()"></ion-input>
               <ion-select style="font-size:12px" [ngModel]="selectedMeasureA.name" (ngModelChange)="changeMeasureA($event)">
                  <ion-option *ngFor="let measure of measurements" [selected]="isMeasureASelected(measure.id)">{{measure.name}}</ion-option>
               </ion-select>
            </ion-item>
            <ion-item>
               <ion-input [(ngModel)]="valueB" (change)="updateValueA()"></ion-input>
               <ion-select style="font-size:12px" [ngModel]="selectedMeasureB.name" (ngModelChange)="changeMeasureB($event)">
                  <ion-option *ngFor="let measure of measurements" [selected]="isMeasureBSelected(measure.id)">{{measure.name}}</ion-option>
               </ion-select>
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
  private readonly INIT_MEASURE_A = "Inch";
  private readonly INIT_MEASURE_B = "Cubit";
  public measurements: Measure[];
  public selectedMeasureA: Measure;
  public selectedMeasureB: Measure;
  public valueA: number;
  public valueB: number;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.measurements = Measurements;
    this.selectedMeasureA = this.getMeasure(this.INIT_MEASURE_A);
    this.selectedMeasureB = this.getMeasure(this.INIT_MEASURE_B);
    this.valueA = 1.00;
    this.updateValueB();
  }

  public changeMeasureA(measureName: string): void {
    this.selectedMeasureA = this.getMeasure(measureName);
    this.updateValueB();
  }

  public changeMeasureB(measureName: string): void {
    this.selectedMeasureB = this.getMeasure(measureName);
    this.updateValueA();
  }

  public getMeasure(measureName: string): Measure {
    return this.measurements.find(measure => measure.name == measureName);
  }

  public updateValueA(): void {
    // 36 * input / 12 = 3 -- yards to feet
    this.valueA = +((this.valueB * this.selectedMeasureA.inches) / this.selectedMeasureB.inches).toFixed(3);
  }

  public updateValueB(): void {
    // 12 * input / 36 = .33 -- feet to yards
    this.valueB = +((this.valueA * this.selectedMeasureA.inches) / this.selectedMeasureB.inches).toFixed(3);
  }

  public isMeasureASelected(measureId: number) {
    return measureId == this.selectedMeasureA.id;
  }

  public isMeasureBSelected(measureId: number) {
    return measureId == this.selectedMeasureB.id;
  }
}

interface Measure {
  id: number;
  name: string;
  inches: number;
}

let Measurements: Measure[] = [
  {
    id: 1,
    name: "Fingerbreadth",
    inches: 0.72
  },
  {
    id: 2,
    name: "Cubit",
    inches: 17.5
  },
  {
    id: 3,
    name: "Inch",
    inches: 1
  },
  {
    id: 4,
    name: "Feet",
    inches: 12
  },
  {
    id: 5,
    name: "Yard",
    inches: 36
  },
  {
    id: 6,
    name: "Mile",
    inches: 63360
  }
];