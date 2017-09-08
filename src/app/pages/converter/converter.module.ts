import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { ConverterComponent } from './converter';
import { ConversionItemComponent } from './components';
import { MeasurementsEffects } from './effects/measurements.effects';
import { measurementsReducer } from './reducers/measurements.reducer';
import { MeasurementsService } from './services/measurements.service';

@NgModule({
   declarations: [
      ConverterComponent,
      ConversionItemComponent,
   ],
   imports: [
      IonicPageModule.forChild(ConverterComponent),
      StoreModule.forFeature('converter', measurementsReducer),
      EffectsModule.forFeature([MeasurementsEffects]),
   ],
   entryComponents: [
     ConverterComponent,
   ],
   providers: [
      MeasurementsService,
   ]
 })
 export class ConverterModule {}