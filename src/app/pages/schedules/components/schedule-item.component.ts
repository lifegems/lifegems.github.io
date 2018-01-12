import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as checkpointsReducer from '../reducers/checkpoints.reducer';

@Component({
   selector: 'app-schedule-item',
   template: `
   <!--<ion-item (click)="handleTapSection(section)">
      <span padding-left>{{section.name}}</span>
      <ion-icon *ngIf="!isComplete(checkpoints$ | async)" item-end color="secondary" name="ios-radio-button-off"></ion-icon>
      <ion-icon *ngIf="isComplete(checkpoints$ | async)" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
   </ion-item>-->
   <ion-item-sliding #slideItem>
      <ion-item (click)="handleTapSection(section)">
         <span padding-left>{{section.name}}</span>
         <ion-icon *ngIf="!isComplete(checkpoints$ | async)" item-end color="secondary" name="ios-radio-button-off"></ion-icon>
         <ion-icon *ngIf="isComplete(checkpoints$ | async)" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
      </ion-item>
      <ion-item-options side="left">
         <button color="secondary" ion-button (click)="markUpToThisPoint()">
            <span class="fa-layers fa-fw">
               <i class="fas fa-check" data-fa-transform="left-10 up-7 shrink-6"></i>
               <i class="fas fa-check" data-fa-transform="left-10 shrink-6"></i>
               <i class="fas fa-check" data-fa-transform="left-10 down-7 shrink-6"></i>
               <i class="far fa-bars" data-fa-transform="grow-5 right-4"></i>
            </span>
         </button>
      </ion-item-options>
   </ion-item-sliding>
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

   markUpToThisPoint() {
      //replace with action
      console.log("Marking up to this.");
   }
}
