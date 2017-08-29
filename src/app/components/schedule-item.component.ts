import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../models/schedule.model';

@Component({
   selector: 'app-schedule-item',
   template: `
   <ion-item (click)="handleTapSection(section)">
      {{section.name}} 
      <span *ngIf="section.sections.length > 0" [style.color]="'gray'">({{getCompletenessText(section.sections)}})</span>
      <ion-icon *ngIf="section.sections.length > 0 && section.complete" color="secondary" name="md-checkmark-circle"></ion-icon>
      <ion-icon *ngIf="section.sections.length > 0" item-end name="ios-arrow-forward"></ion-icon>
      <ion-icon *ngIf="section.sections.length == 0 && !section.complete" item-end color="secondary" name="md-checkmark"></ion-icon>
      <ion-icon *ngIf="section.sections.length == 0 && section.complete" item-end color="secondary" name="md-checkmark-circle"></ion-icon>
   </ion-item>
   `
})
export class ScheduleItemComponent {
   @Input() section: Section;
   @Output() tapSection: EventEmitter<Section> = new EventEmitter<Section>();
   
   getCompletenessText(sections): string {
      return sections.filter(sect => sect.complete).length + "/" + sections.length;
   }

   handleTapSection(section: Section): void {
      this.tapSection.emit(section);
   }
}