import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as checkpointsActions from '../actions/checkpoints.actions';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-section',
   template: `
   <ion-item-divider class="schedule-divider" (click)="toggleCollapse()">
      {{checkpoint.name}}
      <ion-icon *ngIf="isCollapsed && isSectionComplete(checkpoints$ | async)" class="section-done" item-end name="md-checkmark"></ion-icon>
      <ion-icon *ngIf="isCollapsed && !isSectionComplete(checkpoints$ | async)" item-end name="ios-arrow-down"></ion-icon>
      <ion-icon *ngIf="!isCollapsed" item-end name="ios-arrow-up"></ion-icon>
   </ion-item-divider>
   <ng-template [ngIf]="!isCollapsed">
      <ng-template ngFor let-section [ngForOf]="checkpoint.sections">
         <app-schedule-item [section]="section" (tapSection)="handleTapCheckpoint($event)"></app-schedule-item>
      </ng-template>
   </ng-template>
   `
})
export class ScheduleSectionComponent implements OnInit {
   @Input() schedule: any;
   @Input() checkpoint: any;
   @Output() tapCheckpoint: EventEmitter<any> = new EventEmitter<any>();

   public checkpoints$: Store<{scheduleId: Number, checkpointIds: Number[]}[]>;
   public isCollapsed: boolean;

   constructor(private store: Store<checkpointsReducer.CheckpointsState>) {
      this.isCollapsed = true;
   }

   ngOnInit() {
      this.checkpoints$ = this.store.select(checkpointsReducer.getLocalCheckpoints);
   }

   handleTapCheckpoint(checkpoint) {
      this.tapCheckpoint.emit(checkpoint);
   }

   isSectionComplete(local: {scheduleId: Number, checkpointIds: Number[] }[]) {
      let localCheckpoints = local.find(s => s.scheduleId === this.schedule.id);
      let unsaved = this.checkpoint.sections.filter(c => localCheckpoints.checkpointIds.indexOf(c.id) > -1);
      return unsaved.length === this.checkpoint.sections.length;
   }

   toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
   }
}