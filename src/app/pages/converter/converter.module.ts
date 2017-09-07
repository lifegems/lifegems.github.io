import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConverterComponent } from './converter';
import { ConversionItemComponent } from './components';

@NgModule({
   declarations: [
     ConverterComponent,
     ConversionItemComponent,
   ],
   imports: [
     IonicPageModule.forChild(ConverterComponent)
   ],
   entryComponents: [
     ConverterComponent
   ]
 })
 export class ConverterModule {}