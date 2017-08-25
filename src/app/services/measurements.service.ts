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
  {
    id: 1,
    name: "Cubits",
    amount: 17.5,
    type: "Length"
  },
  {
    id: 2,
    name: "Fathoms",
    amount: 72,
    type: "Length"
  },
  {
    id: 3,
    name: "Feet",
    amount: 12,
    type: "Length"
  },
  {
    id: 4,
    name: "Fingerbreadths",
    amount: 0.73,
    type: "Length"
  },
  {
    id: 5,
    name: "Handbreadths",
    amount: 2.9,
    type: "Length"
  },
  {
    id: 6,
    name: "Inches",
    amount: 1,
    type: "Length"
  },
  {
    id: 7,
    name: "Long Cubits",
    amount: 20.4,
    type: "Length"
  },
  {
    id: 8,
    name: "Long Reeds",
    amount: 122.4,
    type: "Length"
  },
  {
    id: 9,
    name: "Miles",
    amount: 63360,
    type: "Length"
  },
  {
    id: 10,
    name: "Reeds",
    amount: 105,
    type: "Length"
  },
  {
    id: 11,
    name: "Roman stadii",
    amount: 7283.4,
    type: "Length"
  },
  {
    id: 12,
    name: "Short Cubits",
    amount: 15,
    type: "Length"
  },
  {
    id: 13,
    name: "Spans",
    amount: 8.75,
    type: "Length"
  },
  {
    id: 14,
    name: "Yards",
    amount: 36,
    type: "Length"
  },
  {
    id: 16,
    name: "Bekah",
    amount: 5.7,
    type: "Weight"
  },
  {
    id: 18,
    name: "Gerah",
    amount: 0.57,
    type: "Weight"
  },
  {
    id: 15,
    name: "Gram",
    amount: 1,
    type: "Weight"
  },
  {
    id: 17,
    name: "Shekel",
    amount: 11.4,
    type: "Weight"
  },
];