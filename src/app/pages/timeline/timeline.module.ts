import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { TimelineComponent } from './timeline';
import { ProfileModal, TimelineListModal, TimelineRowComponent } from './components';
import { timelineReducer } from './reducers/timeline.reducer';
import { TimelineService } from './services';
import { TimelineEffects } from './effects/timeline.effects';

@NgModule({
   declarations: [
    ProfileModal,
    TimelineListModal,
    TimelineRowComponent
   ],
   imports: [
      IonicPageModule.forChild(TimelineComponent),
      StoreModule.forFeature('timeline', {
         timeline: timelineReducer
      }),
      EffectsModule.forFeature([TimelineEffects]),
   ],
   entryComponents: [
      TimelineComponent,
      ProfileModal,
      TimelineListModal,
   ],
   providers: [
      TimelineService,
   ]
 })
 export class TimelineModule {}