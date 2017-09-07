import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as measureActions from '../actions/measurements.actions';
import { MeasurementsService } from '../services/measurements.service';

@Injectable()
export class MeasurementsEffects {
   @Effect()
   $loadMeasurements: Observable<Action> = this.$actions
      .ofType(measureActions.INIT)
      .switchMap(() => {
         return this.measurementsService.getMeasures()
            .map(measures => new measureActions.MeasuresLoadedAction(measures))
            .catch(() => new measureActions.MeasuresFailedAction());
      });
      
   @Effect()
   $setTypes: Observable<Action> = this.$actions
      .ofType(measureActions.MEASURESLOADED)
      .switchMap((action: measureActions.MeasuresLoadedAction) => {
         return of(new measureActions.TypesSetAction(action.payload));
      });
   
   constructor(private $actions: Actions, private measurementsService: MeasurementsService) {}
}