import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IonicPageModule } from 'ionic-angular';

import { KingsComponent } from './kings';
import { ExpanderComponent, KingsListModal, PersonCardComponent } from './components';
import { KingsService } from './services/kings.service';
import { KingsEffects } from './effects/kings.effects';
import { kingsReducer } from './reducers/kings.reducer';

@NgModule({
   declarations: [
      ExpanderComponent,
      KingsComponent,
      KingsListModal,
      PersonCardComponent,
   ],
   imports: [
      IonicPageModule.forChild(KingsComponent),
      StoreModule.forFeature('kings', {
         kings: kingsReducer
      }),
      EffectsModule.forFeature([KingsEffects]),
   ],
   entryComponents: [
      KingsComponent,
      KingsListModal,
   ],
   providers: [
      KingsService,
   ]
 })
 export class KingsModule {}