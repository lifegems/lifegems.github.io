import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import { Storage } from '@ionic/storage';

@Injectable()
export class CheckpointsService {
   private baseUri: string = "https://chrome-plateau-178520.appspot.com";

   constructor(private storage: Storage, private http: HttpClient) {
      // this.storage.clear();
   }
   
   getLocalCheckpoints(): Observable<any[]> {
      return Observable.fromPromise(this.storage.get('checkpoints'));
   }
   
   getRemoteCheckpoints(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUri}/checkpoints`);
   }

   saveLocalCheckpoint(payload: {local: {scheduleId: Number, checkpointIds: Number[]}[], scheduleId: Number, checkpointId: Number}) {
      let updatedLocal = this.renderLocalCheckpoints(payload.local, payload.scheduleId, payload.checkpointId);
      return Observable.fromPromise(this.storage.set(`checkpoints`, updatedLocal));
   }

   private renderLocalCheckpoints(local: {scheduleId: Number, checkpointIds: Number[]}[], scheduleId: Number, checkpointId: Number) {
      let updatedSchedule = local.find(s => s.scheduleId === scheduleId);
      if (!updatedSchedule) {
         updatedSchedule = {
            scheduleId: scheduleId,
            checkpointIds: [],
         };
      }
      if (updatedSchedule.checkpointIds.indexOf(checkpointId) == -1) {
         updatedSchedule.checkpointIds.push(checkpointId);
      } else {
         updatedSchedule.checkpointIds = updatedSchedule.checkpointIds.filter(c => c !== checkpointId);
      }
      local = local.filter(s => s.scheduleId !== scheduleId);
      local.push(updatedSchedule);
      return local;
   }
}