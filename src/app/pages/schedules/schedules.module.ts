import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { SchedulesComponent } from './schedules';
import { ScheduleItemComponent, ScheduleSectionComponent, ScheduleSettingsPopover } from './components';
import { SchedulesService } from './services';
import { SchedulesEffects } from './effects/schedules.effects';
import { schedulesReducer } from './reducers/schedules.reducer';

@NgModule({
   declarations: [
      SchedulesComponent,
      ScheduleItemComponent,
      ScheduleSectionComponent,
      ScheduleSettingsPopover
   ],
   imports: [
      IonicPageModule.forChild(SchedulesComponent),
      StoreModule.forFeature('schedules', schedulesReducer),
      EffectsModule.forFeature([SchedulesEffects]),
   ],
   entryComponents: [
      SchedulesComponent,
      ScheduleSectionComponent,
      ScheduleSettingsPopover
   ],
   providers: [
      SchedulesService
   ]
 })
 export class SchedulesModule {}