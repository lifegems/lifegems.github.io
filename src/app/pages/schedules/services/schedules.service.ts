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
   private schedules: Schedule[];

   constructor(private storage: Storage, private http: HttpClient) {
      this.schedules = Object.assign([], [
         watchtowerComplete,
         bibleReadingChrono,
         bibleReadingCover,
         memorialReading,
      ]);
   }

   clearSchedule(scheduleKey: string) {
      return Observable.fromPromise(this.storage.set(scheduleKey, JSON.stringify(this.schedules.find(s => s.name == scheduleKey))));
   }
   
   getRemoteSchedules(): Observable<any[]> {
      return this.http.get<any[]>("https://chrome-plateau-178520.appspot.com/schedules");
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