import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { TimelineCommponent } from './timeline';
import { ProfileModal, TimelineListModal, TimelineRowComponent } from './components';
import { timelineReducer } from './reducers/timeline.reducer';
import { TimelineService } from './services';
import { TimelineEffects } from './effects/timeline.effects';

@NgModule({
   declarations: [
    ProfileModal,
    TimelineCommponent,
    TimelineListModal,
    TimelineRowComponent
   ],
   imports: [
      IonicPageModule.forChild(TimelineCommponent),
      StoreModule.forFeature('timeline', timelineReducer),
      EffectsModule.forFeature([TimelineEffects]),
   ],
   entryComponents: [
      TimelineCommponent,
      ProfileModal,
      TimelineListModal,
   ],
   providers: [
      TimelineService,
   ]
 })
 export class TimelineModule {}