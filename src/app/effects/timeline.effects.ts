import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as timelineActions from '../actions/timeline.actions';
import { TimelineService } from '../services';

@Injectable()
export class TimelineEffects {
   @Effect()
   $loadKings: Observable<Action> = this.$actions
      .ofType(timelineActions.INIT)
      .switchMap(() => {
         return this.timelineService.getAllItems()
            .map((items) => new timelineActions.TimelineLoadedAction(items))
            .catch(() => new timelineActions.TimelineFailedAction());
      });
   
   constructor(private $actions: Actions, private timelineService: TimelineService) {}
}