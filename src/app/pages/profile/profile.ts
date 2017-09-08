import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController } from 'ionic-angular';

import * as ProfileActions from './actions/profile.actions';
import * as profileState from './reducers/profile.reducer';

@IonicPage({
   name: 'ProfileComponent'
})
@Component({
   template: `
   <ion-header>
      <ion-navbar>
         <ion-title>Profile</ion-title>
      </ion-navbar>
   </ion-header>
   <ion-content>
      <ion-card>
         <ion-card-content>
            <p>User: {{ (user$ | async)?.name }}</p>
            <p>Email: {{ (user$ | async)?.email }}</p>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
         </ion-card-content>
      </ion-card>
   </ion-content>
   `
})
export class ProfileComponent implements OnInit {
   public user$: Store<profileState.ProfileState>;

   constructor(public navCtrl: NavController, private store: Store<profileState.ProfileState>) {
      this.user$ = this.store.select(profileState.getUser);
   }

   ngOnInit() {
      this.store.dispatch(new ProfileActions.InitAction());
   }

   onSignIn(user) {
      console.log(user);
   }
}