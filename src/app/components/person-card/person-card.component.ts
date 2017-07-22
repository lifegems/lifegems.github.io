import { Component, Input } from '@angular/core';

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
          <ion-item-group style="border-bottom:0.5px solid white">
            <button ion-item color="secondary" *ngIf="king?.sons && king.sons.length > 0" (click)="toggleSons()">Sons ({{king.sons.length}})</button>
            <span *ngIf="showSons$ | async">
              <ion-item *ngFor="let son of king?.sons" [ngClass]="{'bold':son == king?.chosenOffspring}">{{son}}</ion-item>
            </span>
          </ion-item-group>
          <ion-item-group style="border-bottom:0.5px solid white">
            <button ion-item color="secondary" *ngIf="king?.highPriests && king.highPriests.length > 0" (click)="togglePriests()">High Priests ({{king.highPriests.length}})</button>
            <span *ngIf="showPriests$ | async">
              <ion-item *ngFor="let priest of king?.highPriests">{{priest}}</ion-item>
            </span>
          </ion-item-group>
          <ion-item-group style="border-bottom:0.5px solid white">
            <button ion-item color="secondary" *ngIf="king?.prophets && king.prophets.length > 0" (click)="toggleProphets()">Prophets ({{king.prophets.length}})</button>
            <span *ngIf="showProphets$ | async">
              <ion-item *ngFor="let prophet of king?.prophets">{{prophet}}</ion-item>
            </span>
          </ion-item-group>
        </ion-list>
      </ion-card>
   `
})
export class PersonCardComponent {
   @Input() king: any;

   constructor() {
      console.log(this.king);
   }
}