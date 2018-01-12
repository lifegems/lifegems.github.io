import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'schedule-card',
   template: `
   <ion-card>
      <ion-card-header>
         <div text-left>{{schedule.schedule.name}}</div>
         <div text-right>
            <a style="color:#488aff" *ngIf="!isPinned(pinned)" (click)="tapPin()">
               <i class="far fa-thumbtack" data-fa-transform="rotate-45 up-15"></i>
            </a>
            <a style="color:#488aff" *ngIf="isPinned(pinned)" (click)="tapUnpin()">
               <i class="fas fa-thumbtack" data-fa-transform="rotate-45 up-15"></i>
            </a>
         </div>
      </ion-card-header>
      <ion-row>
         <ion-col padding-top text-center>
            {{ getCompletenessText() }}
         </ion-col>
         <ion-col>
             <div text-center (click)="viewSchedule()">
               <a *ngIf="schedule.checkpoints.length > 0">
                  <i class="far fa-list-alt fa-2x"></i>
               </a>
             </div>
            <p ion-text color="danger" text-center padding-top
               *ngIf="schedule.checkpoints.length == 0">
               <ion-icon name="md-warning"></ion-icon>
               No Checkpoints
            </p>
         </ion-col>
      </ion-row>
      <ion-list *ngIf="hasCheckpoints() && isScheduleComplete()">
         <ion-list-header color="secondary">
            Completed
            <ion-icon name="md-checkmark"></ion-icon>
         </ion-list-header>
      </ion-list>
      <ion-list *ngIf="hasCheckpoints() && !isScheduleComplete()">
         <app-schedule-section [schedule]="schedule.schedule" [checkpoint]="getNextCheckpoint()" (tapCheckpoint)="tapCheckpoint($event)"></app-schedule-section>
      </ion-list>
   </ion-card>
   `
})
export class ScheduleCardComponent implements OnInit {
   @Input() checkpoints: any[];
   @Input() nextCheckpoint: any;
   @Input() schedule: any;
   @Input() pinned: number[];
   @Output() onViewSchedule: EventEmitter<number> = new EventEmitter<number>();
   @Output() onTapCheckpoint: EventEmitter<number> = new EventEmitter<number>();
   @Output() onTapPin: EventEmitter<null> = new EventEmitter<null>();
   @Output() onTapUnpin: EventEmitter<null> = new EventEmitter<null>();

   constructor() { }

   ngOnInit() {}

   getCompletenessText() {
      let total    = this.getCheckpointsTotal();
      let complete = this.getCheckpointsCompleted();
      return ((complete / total) * 100).toFixed(1) + "%";
   }

   getCheckpointsCompleted() {
      let checkpoint = this.checkpoints.find(s => s.scheduleId == this.schedule.schedule.id);
      return (checkpoint) ? checkpoint.checkpointIds.length : 0;
   }

   getCheckpointsTotal() {
      return (this.schedule) ? this.schedule.checkpoints.map(c => (c) ? c.sections.length : 0).reduce((a,b) => a + b, 0) : 0;
   }

   getNextCheckpoint() {
      let checks = this.checkpoints.find(c => c.scheduleId == this.schedule.schedule.id);
      return this.schedule.checkpoints.find(c => c.sections.map(s => s.id).filter(id => (checks) ? checks.checkpointIds.indexOf(id) === -1 : true).length > 0);
   }

   hasCheckpoints() {
      return (this.schedule.checkpoints) ? this.schedule.checkpoints.length > 0 : false;
   }

   isPinned() {
      return this.pinned.filter(p => p === this.schedule.schedule.id).length > 0;
   }

   isScheduleComplete() {
      let total = this.getCheckpointsTotal();
      let complete = this.getCheckpointsCompleted();
      return total === complete;
   }

   tapCheckpoint(checkpoint) {
      this.onTapCheckpoint.emit(checkpoint);
   }

   viewSchedule() {
      this.onViewSchedule.emit(this.schedule.schedule.id);
   }

   tapPin() {
      this.onTapPin.emit();
   }

   tapUnpin() {
      this.onTapUnpin.emit();
   }
}
