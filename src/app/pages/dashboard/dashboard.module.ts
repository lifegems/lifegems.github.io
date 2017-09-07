import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardComponent } from './dashboard';

@NgModule({
   declarations: [
     DashboardComponent
   ],
   imports: [
     IonicPageModule.forChild(DashboardComponent)
   ],
   entryComponents: [
     DashboardComponent
   ]
 })
 export class DashboardModule {}