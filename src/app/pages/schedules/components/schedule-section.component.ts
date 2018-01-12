import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as checkpointsActions from '../actions/checkpoints.actions';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-section',
   template: `
   <ion-item-divider class="schedule-divider" (click)="toggleCollapse()">
      {{checkpoint?.name}}
      <ion-icon *ngIf="isCollapsed && isSectionComplete(checkpoints$ | async)" class="section-done" item-end name="md-checkmark"></ion-icon>
      <ion-icon *ngIf="isCollapsed && !isSectionComplete(checkpoints$ | async)" item-end name="ios-add"></ion-icon>
      <ion-icon *ngIf="!isCollapsed" item-end name="ios-remove"></ion-icon>
   </ion-item-divider>
   <ng-template [ngIf]="!isCollapsed">
      <ng-template ngFor let-section [ngForOf]="checkpoint?.sections">
         <app-schedule-item [section]="section" (tapSection)="handleTapCheckpoint($event)" (tapPrevSections)="handleTapPrevCheckpoints($event)"></app-schedule-item>
      </ng-template>
   </ng-template>
   `
})
export class ScheduleSectionComponent implements OnInit {
   @Input() schedule: any;
   @Input() checkpoint: any;
   @Output() tapCheckpoint: EventEmitter<any> = new EventEmitter<any>();
   @Output() tapPrevCheckpoints: EventEmitter<any> = new EventEmitter<any>();

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

   handleTapPrevCheckpoints(checkpoint) {
      this.tapPrevCheckpoints.emit(checkpoint);
   }

   isSectionComplete(local: {scheduleId: Number, checkpointIds: Number[] }[]) {
      let localCheckpoints = local.find(s => s.scheduleId === this.schedule.id);
      let saved = (this.checkpoint) ? this.checkpoint.sections.filter(c => (localCheckpoints) ? localCheckpoints.checkpointIds.indexOf(c.id) > -1 : false) : [];
      let sectionsLength = (this.checkpoint) ? this.checkpoint.sections.length : 0;
      return saved.length === sectionsLength;
   }

   toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
   }
}
