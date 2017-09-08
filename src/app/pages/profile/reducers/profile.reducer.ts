import { createSelector } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.actions';

export type Action = ProfileActions.ALL;

export interface ProfileState {
   user: any;
}

const initState: ProfileState = {
   user: {
      name: 'anonymous',
      email: 'none'
   }
};

export function profileReducer(state: ProfileState = initState, action: Action) {
   switch(action.type) {
      case ProfileActions.INIT:
         return initState;
      case ProfileActions.SIGNIN:
         return Object.assign({}, state, {
            user: action.payload
         });
      default:
         return Object.assign({}, state);
   }
}

export const getState = (state) => state.profile;
export const getUser = createSelector(getState, (state: ProfileState) => state.user);