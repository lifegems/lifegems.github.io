import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import * as schedulesActions from '../actions/schedules.actions';
import { SchedulesService } from '../services';

@Injectable()
export class SchedulesEffects {
   @Effect()
   $initSchedules: Observable<Action> = this.$actions
      .ofType(schedulesActions.INIT)
      .mergeMap(() => [
         new schedulesActions.InitRemoteSchedulesAction(),
         new schedulesActions.InitLocalSchedulesAction()
      ]);

   @Effect()
   $loadLocalSchedules: Observable<Action> = this.$actions
      .ofType(schedulesActions.INITLOCAL)
      .switchMap(() => {
         return this.schedulesService.getLocalSchedules()
            .map((schedules) => {
               let payload = (schedules) ? schedules : [];
               return new schedulesActions.LocalSchedulesLoadedAction(payload)
            });
      });

   @Effect()
   $loadRemoteSchedules: Observable<Action> = this.$actions
      .ofType(schedulesActions.INITREMOTE)
      .switchMap(() => {
         return this.schedulesService.getRemoteSchedules()
            .map((schedules) => new schedulesActions.RemoteSchedulesLoadedAction(schedules));
      });

   @Effect()
   $downloadRemoteSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.INITDOWNLOAD)
      .switchMap((action: schedulesActions.InitDownloadScheduleAction) => {
         return this.schedulesService.downloadRemoteSchedule(action.payload.id)
            .map((checkpoints) => new schedulesActions.SaveLocalScheduleAction({schedule: action.payload, checkpoints: checkpoints}));
      });
      
   @Effect()
   $saveLocalSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.SAVELOCALSCHEDULE)
      .switchMap((action: schedulesActions.SaveLocalScheduleAction) => {
         return this.schedulesService.saveLocalSchedule(action.payload)
            .map(() => new schedulesActions.DownloadSuccessAction(action.payload));
      });

   @Effect()
   $deleteLocalSchedule: Observable<Action> = this.$actions
      .ofType(schedulesActions.INITDELETELOCAL)
      .switchMap((action: schedulesActions.InitDeleteLocalScheduleAction) => {
         return this.schedulesService.deleteLocalSchedule(action.payload)
            .map(() => new schedulesActions.DeleteLocalSuccessAction(action.payload));
      });
   
   constructor(private $actions: Actions, private schedulesService: SchedulesService) {}
}