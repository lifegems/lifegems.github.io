import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Measure, MeasureValue } from './models/measure.model';
import * as MeasurementActions from './actions/measurements.actions';
import * as measurementsState from './reducers/measurements.reducer';

@IonicPage()
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Unit Converter</ion-title>
    <ion-buttons end>
      <button ion-button icon-only (click)="addMeasurement()">
        <ion-icon name="md-add"></ion-icon>
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>

<ion-content>
   <ion-card>
      <ion-card-header no-padding>
         <ion-list>
            <ion-item>
               <ion-label>Measurement Type</ion-label>
               <ion-select style="font-size:12px" [ngModel]="(selectedType$ | async)" (ngModelChange)="changeType($event)">
                  <ion-option [selected]="type == (selectedType$ | async)" *ngFor="let type of (types$ | async)">{{type}}</ion-option>
               </ion-select>
            </ion-item>
          </ion-list>
      </ion-card-header>
      <ion-card-content no-padding>
         <ion-list>
            <ion-item-divider text-center>Units</ion-item-divider>
            <app-conversion-item
               [index]="0" [measureValue]="(baseMeasure$ | async)" [measurements]="listTypeMeasurements(selectedType$ | async, measurements$ | async)"
               (changeValue)="changeBaseValue($event)" (changeMeasure)="changeBaseMeasure($event)">
            </app-conversion-item>
            <app-conversion-item *ngFor="let aux of (auxMeasures$ | async); let i = index; trackBy:trackAux"
               [index]="i" [measureValue]="aux" [measurements]="listTypeMeasurements(selectedType$ | async, measurements$ | async)"
               (changeValue)="changeAuxValue($event)" (changeMeasure)="changeAuxMeasure($event)">
            </app-conversion-item>
         </ion-list>
      </ion-card-content>
   </ion-card>
</ion-content>

<ion-footer>
  
</ion-footer>
`
})
export class ConverterComponent implements OnInit {
   public measurements$: Store<Measure[]>;
   public baseMeasure$: Store<MeasureValue>;
   public auxMeasures$: Store<MeasureValue[]>;
   public types$: Store<string[]>;
   public selectedType$: Store<string>;

   constructor(
      public navCtrl: NavController,
      private store: Store<measurementsState.MeasuresState>
   ) {
      this.measurements$ = this.store.select(measurementsState.getMeasurements);
      this.selectedType$ = this.store.select(measurementsState.getSelectedType);
      this.types$        = this.store.select(measurementsState.getTypes);
      this.baseMeasure$  = this.store.select(measurementsState.getBaseMeasure);
      this.auxMeasures$  = this.store.select(measurementsState.getAuxMeasures);
   }

   ngOnInit() {
      this.store.dispatch(new MeasurementActions.InitMeasuresAction());
   }

   public addMeasurement() {
      this.store.dispatch(new MeasurementActions.AddAuxMeasurementAction());
   }

   public changeAuxMeasure(aux: {index: number, name: string}): void {
      this.store.dispatch(new MeasurementActions.ChangeAuxMeasureAction(aux));
   }

   public changeAuxValue(aux: {index: number, value: number}) {
      this.store.dispatch(new MeasurementActions.ChangeAuxValueAction(aux));
   }

   public changeBaseMeasure(base: {index: number, name: string}): void {
      this.store.dispatch(new MeasurementActions.ChangeBaseMeasureAction(base.name));
   }

   public changeBaseValue(base: {index: number, value: number}): void {
      this.store.dispatch(new MeasurementActions.ChangeBaseValueAction(base.value));
   }

   public changeType(type: string) {
     this.store.dispatch(new MeasurementActions.ChangeTypeAction(type));
   }

   public listTypeMeasurements(type: string, measurements: Measure[]) {
     return measurements.filter(m => m.type == type);
   }

   public trackAux(index: any, item, any) {
      return index;
   }
}