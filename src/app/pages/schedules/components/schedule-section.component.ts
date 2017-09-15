import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
   selector: 'app-schedule-section',
   template: `
   <ion-item-divider (click)="toggleCollapse()">
      {{checkpoint.name}}
      <ion-icon *ngIf="!isCollapsed" item-end name="ios-arrow-up"></ion-icon>
      <ion-icon *ngIf="isCollapsed" item-end name="ios-arrow-down"></ion-icon>
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
   @Input() checkpoint: any[];
   @Output() tapCheckpoint: EventEmitter<any> = new EventEmitter<any>();

   public isCollapsed: boolean;

   constructor() {
      this.isCollapsed = true;
   }

   ngOnInit() {}

   handleTapCheckpoint(checkpoint) {
      this.tapCheckpoint.emit(checkpoint);
   }

   toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
   }
}