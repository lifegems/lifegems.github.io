import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Measure, MeasureValue } from '../../../models/measure.model';

@Component({
   selector: 'app-conversion-item',
   template: `
   <ion-item>
      <ion-input [ngModel]="measureValue.value" (ngModelChange)="handleChangeValue(index, $event)"></ion-input>
      <ion-select style="font-size:12px" [ngModel]="measureValue.measure.name" (ngModelChange)="handleChangeMeasure(index, $event)">
         <ng-template ngFor let-measure [ngForOf]="measurements">
            <ion-option [selected]="isMeasureSelected(measure.id)">{{measure.name}}</ion-option>
         </ng-template>
      </ion-select>
   </ion-item>
   `,
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionItemComponent {
   @Input() index: number;
   @Input() measureValue: MeasureValue;
   @Input() measurements: Measure[];

   @Output() changeValue: EventEmitter<{index: number, value: number}> = new EventEmitter<{index: number, value: number}>();
   @Output() changeMeasure: EventEmitter<{index: number, name: string}> = new EventEmitter<{index: number, name: string}>();

   handleChangeValue(index, value) {
      this.changeValue.emit({
         index: index,
         value: value
      });
   }

   handleChangeMeasure(index, name) {
      this.changeMeasure.emit({
         index: index,
         name: name
      });
   }

   isMeasureSelected(id: number): boolean {
      return (id == this.measureValue.measure.id);
   }
}