import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import * as checkpointsActions from '../actions/checkpoints.actions';
import { CheckpointsService } from '../services';

@Injectable()
export class CheckpointsEffects {
   @Effect()
   $initCheckpoints: Observable<Action> = this.$actions
      .ofType(checkpointsActions.INIT)
      .mergeMap(() => [
         new checkpointsActions.InitRemoteCheckpointsAction(),
         new checkpointsActions.InitLocalCheckpointsAction()
      ]);

   @Effect()
   $loadLocalCheckpoints: Observable<Action> = this.$actions
      .ofType(checkpointsActions.INITLOCAL)
      .switchMap(() => {
         return this.checkpointsService.getLocalCheckpoints()
            .map((checkpoints) => {
               let payload = (checkpoints) ? checkpoints : [];
               return new checkpointsActions.LocalCheckpointsLoadedAction(payload)
            });
      });
      
   @Effect()
   $saveLocalCheckpoint: Observable<Action> = this.$actions
      .ofType(checkpointsActions.INITSAVELOCALCHECKPOINT)
      .switchMap((action: checkpointsActions.InitSaveLocalCheckpointAction) => {
         return this.checkpointsService.saveLocalCheckpoint(action.payload)
            .map((checkpoints) => new checkpointsActions.SaveLocalSuccessAction(checkpoints));
      });
   
   constructor(private $actions: Actions, private checkpointsService: CheckpointsService) {}
}