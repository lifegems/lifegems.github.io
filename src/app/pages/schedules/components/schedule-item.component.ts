import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-item',
   template: `
   <ion-item (click)="handleTapSection(section)">
      {{section.name}}
      <span *ngIf="section.sections.length > 0" [style.color]="'gray'">({{getCompletenessText(checkpointIds$ | async)}})</span>
      <ion-icon *ngIf="section.sections.length > 0" item-end name="ios-arrow-forward"></ion-icon>
      <ion-icon *ngIf="section.sections.length > 0 && isComplete(checkpointIds$ | async)" color="secondary" name="md-checkmark-circle"></ion-icon>
      <ion-icon *ngIf="section.sections.length == 0 && !isComplete(checkpointIds$ | async)" item-end color="secondary" name="md-checkmark"></ion-icon>
      <ion-icon *ngIf="section.sections.length == 0 && isComplete(checkpointIds$ | async)" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
   </ion-item>
   `
})
export class ScheduleItemComponent implements OnInit {
   @Input() section: { code: String, id: Number, parent: String, schedule: Number, sections: any[] };
   @Output() tapSection: EventEmitter<{ schedule: any, checkpoints: any[] }> = new EventEmitter<{ schedule: any, checkpoints: any[] }>();
   public checkpointIds$: Store<{scheduleId: Number, checkpointIds: Number[]}[]>;

   constructor(public store: Store<checkpointsReducer.CheckpointsState>) {}

   ngOnInit() {
      this.checkpointIds$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
   }

   getCompletenessText(checkpointIds: Number[]) {
      let completeIds = this.listSectionCompleteIds(this.section, checkpointIds);
      return `${completeIds.length}/${this.section.sections.length}`;
   }

   handleTapSection(section: any): void {
      this.tapSection.emit(section);
   }

   isComplete(checkpointIds: Number[]): boolean {
      let completeIds: Number[] = this.listSectionCompleteIds(this.section, checkpointIds);
      if (completeIds.indexOf(this.section.id) > -1
         || this.section.sections.filter(s => completeIds.indexOf(s.id) > -1).length === 0) {
         return true;
      }
      return false;
   }

   listSectionCompleteIds(section: {sections: any[], id: Number}, checkpointIds: Number[]): Number[] {
      let completeIds = [];
      if (section.sections.length === 0 && checkpointIds.indexOf(section.id) > -1) {
         completeIds.push(section.id);
      } else if (section.sections.length > 0) {
         section.sections.forEach(s => {
            let ids = this.listSectionCompleteIds(s, checkpointIds);
            if (ids.length > 0) {
               completeIds.push(...ids);
            }
         });
      }
      return completeIds;
   }
}