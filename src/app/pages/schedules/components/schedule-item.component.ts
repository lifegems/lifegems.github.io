import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-item',
   template: `
   <ion-item (click)="handleTapSection(section)">
      {{section.name}}
      <ion-icon *ngIf="!isComplete(checkpoints$ | async)" item-end color="secondary" name="md-checkmark"></ion-icon>
      <ion-icon *ngIf="isComplete(checkpoints$ | async)" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
   </ion-item>
   `
})
export class ScheduleItemComponent implements OnInit {
   @Input() section: { code: String, id: Number, parent: String, schedule: Number, sections: any[] };
   @Output() tapSection: EventEmitter<{ schedule: any, checkpoints: any[] }> = new EventEmitter<{ schedule: any, checkpoints: any[] }>();
   public checkpoints$: Store<{scheduleId: Number, checkpointIds: Number[]}[]>;

   constructor(public store: Store<checkpointsReducer.CheckpointsState>) {}

   ngOnInit() {
      this.checkpoints$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
   }

   handleTapSection(section: any): void {
      this.tapSection.emit(section);
   }

   isComplete(checkpoints: {scheduleId: Number, checkpointIds: Number[]}[] ): boolean {
      let checkpoint = checkpoints.find(c => c.scheduleId == this.section.schedule);
      return (checkpoint) ? checkpoint.checkpointIds.indexOf(this.section.id) > -1 : false;
   }
}