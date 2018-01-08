import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { SchedulesComponent } from './schedules';
import { RemoteSchedulesModal, ScheduleCardComponent, ScheduleItemComponent, ScheduleSectionComponent, ScheduleViewer } from './components';
import { CheckpointsService, SchedulesService } from './services';
import { SchedulesEffects } from './effects/schedules.effects';
import { schedulesReducer } from './reducers/schedules.reducer';
import { checkpointsReducer } from './reducers/checkpoints.reducer';
import { CheckpointsEffects } from './effects/checkpoints.effects';

@NgModule({
   declarations: [
      RemoteSchedulesModal,
      SchedulesComponent,
      ScheduleCardComponent,
      ScheduleItemComponent,
      ScheduleSectionComponent,
      ScheduleViewer,
   ],
   imports: [
      IonicPageModule.forChild(SchedulesComponent),
      StoreModule.forFeature('schedules', {
        checkpoints: checkpointsReducer,
        schedules: schedulesReducer
      }),
      EffectsModule.forFeature([CheckpointsEffects,SchedulesEffects]),
   ],
   entryComponents: [
      RemoteSchedulesModal,
      SchedulesComponent,
      ScheduleViewer,
   ],
   providers: [
      CheckpointsService,
      SchedulesService,
   ]
 })
 export class SchedulesModule {}