import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Measure } from '../models/measure.model';

@Injectable()
export class MeasurementsService {
   public getMeasures() {
      return Observable.create(observer => {
         observer.next(Measurements);
      });
   }
}

let Measurements: Measure[] = [
  { id: 101, name: "Cubits",         amount: 17.5,         type: "Length" },
  { id: 102, name: "Fathoms",        amount: 72,           type: "Length" },
  { id: 103, name: "Feet",           amount: 12,           type: "Length" },
  { id: 104, name: "Fingerbreadths", amount: 0.73,         type: "Length" },
  { id: 105, name: "Handbreadths",   amount: 2.9,          type: "Length" },
  { id: 106, name: "Inches",         amount: 1,            type: "Length" },
  { id: 107, name: "Long Cubits",    amount: 20.4,         type: "Length" },
  { id: 108, name: "Long Reeds",     amount: 122.4,        type: "Length" },
  { id: 109, name: "Miles",          amount: 63360,        type: "Length" },
  { id: 110, name: "Reeds",          amount: 105,          type: "Length" },
  { id: 111, name: "Roman stadii",   amount: 7283.4,       type: "Length" },
  { id: 112, name: "Short Cubits",   amount: 15,           type: "Length" },
  { id: 113, name: "Spans",          amount: 8.75,         type: "Length" },
  { id: 114, name: "Yards",          amount: 36,           type: "Length" },
  { id: 201, name: "Bekah",          amount: 5.7,          type: "Weight" },
  { id: 202, name: "Gerah",          amount: 0.57,         type: "Weight" },
  { id: 203, name: "Gram",           amount: 1,            type: "Weight" },
  { id: 204, name: "Shekel",         amount: 11.4,         type: "Weight" },
  { id: 205, name: "Mina",           amount: 570,          type: "Weight" },
  { id: 206, name: "Talent",         amount: 34200,        type: "Weight" },
  { id: 207, name: "Pim",            amount: 7.8,          type: "Weight" },
  // { id: 208, name: "Ounce",          amount: 28.349523125, type: "Weight" },
];