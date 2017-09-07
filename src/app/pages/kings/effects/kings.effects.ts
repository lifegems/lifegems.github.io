import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as kingsActions from '../actions/kings.actions';
import { KingsService } from '../services/kings.service';

@Injectable()
export class KingsEffects {
   @Effect()
   $loadKings: Observable<Action> = this.$actions
      .ofType(kingsActions.INIT)
      .switchMap(() => {
         return this.kingsService.getKings()
            .map((kings) => new kingsActions.KingsLoadedAction(kings))
            .catch(() => new kingsActions.KingsFailedAction());
      });
   
   constructor(private $actions: Actions, private kingsService: KingsService) {}
}