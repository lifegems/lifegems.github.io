import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import { Storage } from '@ionic/storage';

import { Schedule, Section } from '../models/schedule.model';
import {
   watchtowerComplete,
   bibleReadingChrono,
   bibleReadingCover,
   memorialReading,
} from './schedules';

@Injectable()
export class SchedulesService {
   private schedules: Schedule[];

   constructor(private storage: Storage) {
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

   updateSchedule(scheduleKey: string) {
      return Observable.fromPromise(this.storage.get(scheduleKey)).subscribe(saved => {
         console.log(saved);
         let updated = this.schedules.find(s => s.name == scheduleKey) as Section;
         let updatedSchedule = this.updateSection(JSON.parse(saved), updated);
         return Observable.fromPromise(this.storage.set(scheduleKey, JSON.stringify(updatedSchedule)));
      });
   }

   private updateSection(oldSection: Section, newSection: Section): Section {
      newSection.name = (oldSection) ? oldSection.name : newSection.name;
      newSection.complete = (oldSection) ?  oldSection.complete : newSection.complete;
      for (let i = 0; i < newSection.sections.length; i++) {
         if (oldSection.sections.length > i) {
            newSection.sections[i] = this.updateSection(oldSection.sections[i], newSection.sections[i]);
         }
      }
      return newSection;
   }
}