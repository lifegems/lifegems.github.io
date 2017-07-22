import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-person-card',
   template: `
   <ion-card>
        <ion-card-header text-center>{{king.startReignYear}} - {{king.endReignYear}}</ion-card-header>
        <ion-card-content>
          <ion-card-title>
            <ion-label *ngIf="king.kingNumber != 7" color="primary" stacked>King</ion-label>
            <ion-label *ngIf="king.kingNumber === 7" color="primary" stacked>Queen</ion-label>
            <span (click)="showKingsListModal()">
              {{king.kingName}}
              <span style="color:cornflowerblue;font-size:14px">Age: {{king.age||'?'}}</span>
            </span>
          </ion-card-title>
        </ion-card-content>

        <ion-list>
          <app-expander *ngIf="king?.sons && king.sons.length > 0"
            [list]="king?.sons"
            [title]="'Sons'"
            [boldItem]="king?.chosenOffspring"
            [toggleExpander]="toggleSons"
            (toggleExpanderChange)="handleToggleSons()">
          </app-expander>
          <app-expander *ngIf="king?.highPriests && king.highPriests.length > 0"
            [list]="king?.highPriests"
            [title]="'High Priests'"
            [toggleExpander]="togglePriests"
            (toggleExpanderChange)="handleTogglePriests()">
          </app-expander>
          <app-expander *ngIf="king?.prophets && king.prophets.length > 0"
            [list]="king?.prophets"
            [title]="'Prophets'"
            [toggleExpander]="toggleProphets"
            (toggleExpanderChange)="handleToggleProphets()">
          </app-expander>
        </ion-list>
      </ion-card>
   `
})
export class PersonCardComponent {
   @Input() king: any;

   @Input()  toggleSons: boolean;
   @Output() toggleSonsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Input()  togglePriests: boolean;
   @Output() togglePriestsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Input()  toggleProphets: boolean;
   @Output() toggleProphetsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

   constructor() {}

   handleToggleSons() {
      this.toggleSons = !this.toggleSons;
      this.toggleSonsChange.emit(this.toggleSons);
   }

   handleTogglePriests() {
      this.togglePriests = !this.togglePriests;
      this.togglePriestsChange.emit(this.togglePriests);
   }

   handleToggleProphets() {
      this.toggleProphets = !this.toggleProphets;
      this.toggleProphetsChange.emit(this.toggleProphets);
   }
}