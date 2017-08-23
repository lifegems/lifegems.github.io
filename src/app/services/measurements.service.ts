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
    name: "Fingerbreadth",
    amount: 0.72,
    type: "Length"
  },
  {
    id: 2,
    name: "Cubit",
    amount: 17.5,
    type: "Length"
  },
  {
    id: 3,
    name: "Inch",
    amount: 1,
    type: "Length"
  },
  {
    id: 4,
    name: "Feet",
    amount: 12,
    type: "Length"
  },
  {
    id: 5,
    name: "Yard",
    amount: 36,
    type: "Length"
  },
  {
    id: 6,
    name: "Mile",
    amount: 63360,
    type: "Length"
  }
];