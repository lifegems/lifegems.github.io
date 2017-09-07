import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-expander',
   template: `
   <ion-item-group style="border-bottom:0.5px solid white">
      <button ion-item color="secondary" *ngIf="list && list.length > 0" (click)="handleToggleExpander()">{{title}} ({{list.length}})</button>
      <span *ngIf="toggleExpander">
         <ion-item *ngFor="let item of list" [ngClass]="{'bold':item == boldItem}">{{item}}</ion-item>
      </span>
   </ion-item-group>
   `
})
export class ExpanderComponent {
   @Input() title: string;
   @Input() boldItem?: string;
   @Input() list: string[];

   @Input() toggleExpander: boolean;
   @Output() toggleExpanderChange: EventEmitter<boolean> = new EventEmitter<boolean>();

   handleToggleExpander() {
      this.toggleExpander = !this.toggleExpander;
      this.toggleExpanderChange.emit(this.toggleExpander);
   }
}