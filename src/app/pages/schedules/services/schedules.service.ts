import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import { Storage } from '@ionic/storage';

import { Schedule } from '../models/schedule.model';
import {
   watchtowerComplete,
   bibleReadingChrono,
   bibleReadingCover,
   memorialReading,
} from './schedules';

@Injectable()
export class SchedulesService {
   private baseUri: string = "https://chrome-plateau-178520.appspot.com";
   private schedules: Schedule[];

   constructor(private storage: Storage, private http: HttpClient) {
      // this.storage.clear();
      this.schedules = Object.assign([], [
         watchtowerComplete,
         bibleReadingChrono,
         bibleReadingCover,
         memorialReading,
      ]);
   }

   downloadRemoteSchedule(id: number): Observable<any> {
      return this.http.get<any[]>(`${this.baseUri}/checkpoints?scheduleId=${id}`);
   }
   
   getLocalSchedules(): Observable<any[]> {
      return Observable.fromPromise(this.storage.get('schedules'));
   }
   
   getRemoteSchedules(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUri}/schedules`);
   }

   saveLocalSchedule(payload: {schedule: any, checkpoints: any[]}) {
      return Observable.fromPromise(this.storage.get('schedules').then(local => {
         if (local) {
            local.push(payload);
         } else {
            local = [payload];
         }
         return Observable.fromPromise(this.storage.set(`schedules`, local));
      }));

   }

   // deprecated
   clearSchedule(scheduleKey: string) {
      return Observable.fromPromise(this.storage.set(scheduleKey, JSON.stringify(this.schedules.find(s => s.name == scheduleKey))));
   }

   getSchedules(): Observable<Schedule[]> {
      return Observable.create(observer => {
         observer.next(this.schedules);
      });
   }

   getAllSaved() {
      return Observable.merge(
         this.storage.get(bibleReadingChrono.name),
         this.storage.get(bibleReadingCover.name),
         this.storage.get(memorialReading.name),
         this.storage.get(watchtowerComplete.name),
      );
   }

   getSavedSchedule(scheduleKey: string) {
      return Observable.fromPromise(this.storage.get(scheduleKey));
   }

   saveSchedule(key: string, schedules: Schedule[]) {
      return Observable.fromPromise(this.storage.set(key, JSON.stringify(schedules.find(s => s.name == key))));
   }
}