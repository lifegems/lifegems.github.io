import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Measure, MeasureValue } from '../models/measure.model';
import { MeasurementsService } from '../services/measurements.service';
import * as MeasurementActions from '../actions/measurements.actions';
import * as measurementsState from '../reducers/measurements.reducer';

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
               <ion-select style="font-size:12px" [ngModel]="(selectedType$ | async)">
                  <ion-option [selected]="type == (selectedType$ | async)" *ngFor="let type of types$ | async">{{type}}</ion-option>
               </ion-select>
            </ion-item>
          </ion-list>
      </ion-card-header>
      <ion-card-content no-padding>
         <ion-list>
            <ion-item>
              <ion-input [ngModel]="(baseMeasure$ | async).value" (ngModelChange)="changeBaseValue($event)"></ion-input>
              <ion-select style="font-size:12px" [ngModel]="baseMeasure" (ngModelChange)="changeBaseMeasure($event)">
                <ng-template ngFor let-measure [ngForOf]="measurements$ | async">
                  <ion-option [selected]="measure.id == (baseMeasure$ | async).measure.id">{{measure.name}}</ion-option>
                </ng-template>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-input readonly [ngModel]="(auxMeasures$ | async)[0].value"></ion-input>
              <ion-select style="font-size:12px" [ngModel]="auxMeasure1" (ngModelChange)="changeAuxMeasure(0, $event)">
                <ng-template ngFor let-measure [ngForOf]="measurements$ | async">
                  <ion-option [selected]="measure.id == (auxMeasures$ | async)[0].measure.id">{{measure.name}}</ion-option>
                </ng-template>
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
  public measurements$: Store<Measure[]>;
  public baseMeasure$: Store<MeasureValue>;
  public auxMeasures$: Store<MeasureValue[]>;
  public types$: Store<string[]>;
  public selectedType$: Store<string>;

  constructor(
    public navCtrl: NavController,
    private measurementsService: MeasurementsService,
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

  public changeAuxMeasure(index: number, measureName: string): void {
    this.store.dispatch(new MeasurementActions.ChangeAuxMeasureAction({
      index: index,
      name: measureName
    }));
  }

  public changeAuxValue(index: number, auxValue: number) {
    this.store.dispatch(new MeasurementActions.ChangeAuxValueAction({
      index: index,
      value: auxValue
    }));
  }

  public changeBaseMeasure(measureName): void {
    this.store.dispatch(new MeasurementActions.ChangeBaseMeasureAction(measureName));
  }

  public changeBaseValue(baseValue: number): void {
    this.store.dispatch(new MeasurementActions.ChangeBaseValueAction(baseValue));
  }
}