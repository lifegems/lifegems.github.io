import { NgModule }      from '@angular/core';
import { StoreModule }   from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IonicPageModule } from 'ionic-angular';

import { ProfileComponent } from './profile';
import { profileReducer } from './reducers/profile.reducer';

@NgModule({
   declarations: [
      ProfileComponent
   ],
   imports: [
      IonicPageModule.forChild(ProfileComponent),
      StoreModule.forFeature('profile', profileReducer),
      EffectsModule.forFeature([]),
   ],
   entryComponents: [
      ProfileComponent
   ],
   providers: []
})
export class ProfileModule {}