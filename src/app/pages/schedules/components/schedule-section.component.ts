import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-section',
   template: `
   <ng-template ngFor let-checkpoint [ngForOf]="schedule.checkpoints">
      <ion-item-divider>{{checkpoint.name}}</ion-item-divider>
      <ng-template ngFor let-section [ngForOf]="checkpoint.sections">
         <app-schedule-item [section]="section" (tapSection)="handleTapSection($event)"></app-schedule-item>
      </ng-template>
   </ng-template>
   `
})
export class ScheduleSectionComponent implements OnInit {
   @Input() checkpoints: { schedule: any, checkpoints: any[] };
   @Output() tapSection: EventEmitter<{ schedule: any, checkpoints: any[] }> = new EventEmitter<{ schedule: any, checkpoints: any[] }>();
   public checkpoints$: Store<{scheduleId: Number, checkpointIds: Number[]}[]>;

   constructor(public store: Store<checkpointsReducer.CheckpointsState>) {}

   ngOnInit() {
      this.checkpoints$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
   }

   // handleTapSection(section: any): void {
   //    this.tapSection.emit(section);
   // }

   // isComplete(checkpoints: {scheduleId: Number, checkpointIds: Number[]}[] ): boolean {
   //    let checkpoint = checkpoints.find(c => c.scheduleId == this.section.schedule);
   //    return (checkpoint) ? checkpoint.checkpointIds.indexOf(this.section.id) > -1 : false;
   // }
}