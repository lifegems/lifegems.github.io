import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as schedulesActions from '../actions/schedules.actions';
import { SchedulesService } from '../services';

@Injectable()
export class SchedulesEffects {
   @Effect()
   $loadSchedules: Observable<Action> = this.$actions
      .ofType(schedulesActions.INIT)
      .switchMap(() => {
         return this.schedulesService.getSchedules()
            .map((schedules) => new schedulesActions.SchedulesLoadedAction(schedules));
      });
   
   @Effect()
   $loadSavedSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.LOADSCHEDULES)
      .switchMap((action: schedulesActions.SchedulesLoadedAction) => {
         return this.schedulesService.getAllSaved()
            .filter(s => s !== null)
            .map(s => new schedulesActions.LoadSavedScheduleAction(JSON.parse(s)));
      });
   
   @Effect()
   $saveSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.SAVESCHEDULE)
      .switchMap((action: schedulesActions.SaveScheduleAction) => {
         return this.schedulesService.saveSchedule(action.payload.key, action.payload.schedules)
            .map(s => new schedulesActions.SaveSuccessAction());
      });
   
   @Effect()
   $clearSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.CLEARSCHEDULE)
      .switchMap((action: schedulesActions.ClearScheduleAction) => {
         return this.schedulesService.clearSchedule(action.payload)
            .map(s => new schedulesActions.InitSchedulesAction());
      });
   
   constructor(private $actions: Actions, private schedulesService: SchedulesService) {}
}