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
  // Lengths are relative to inches
  { id: 101, name: "Cubits",         amount: 17.5,   type: "Length" },
  { id: 102, name: "Fathoms",        amount: 72,     type: "Length" },
  { id: 103, name: "Feet",           amount: 12,     type: "Length" },
  { id: 104, name: "Fingerbreadths", amount: 0.73,   type: "Length" },
  { id: 105, name: "Handbreadths",   amount: 2.9,    type: "Length" },
  { id: 106, name: "Inches",         amount: 1,      type: "Length" },
  { id: 107, name: "Long Cubits",    amount: 20.4,   type: "Length" },
  { id: 108, name: "Long Reeds",     amount: 122.4,  type: "Length" },
  { id: 109, name: "Miles",          amount: 63360,  type: "Length" },
  { id: 110, name: "Reeds",          amount: 105,    type: "Length" },
  { id: 111, name: "Roman stadii",   amount: 7283.4, type: "Length" },
  { id: 112, name: "Short Cubits",   amount: 15,     type: "Length" },
  { id: 113, name: "Spans",          amount: 8.75,   type: "Length" },
  { id: 114, name: "Yards",          amount: 36,     type: "Length" },
  // Weights are relative to grams
  { id: 201, name: "Bekah",  amount: 5.7,   type: "Weight" },
  { id: 202, name: "Gerah",  amount: 0.57,  type: "Weight" },
  { id: 203, name: "Gram",   amount: 1,     type: "Weight" },
  { id: 204, name: "Shekel", amount: 11.4,  type: "Weight" },
  { id: 205, name: "Mina",   amount: 570,   type: "Weight" },
  { id: 206, name: "Talent", amount: 34200, type: "Weight" },
  { id: 207, name: "Pim",    amount: 7.8,   type: "Weight" },
  { id: 208, name: "Daric",  amount: 8.4,   type: "Weight" },
  { id: 209, name: "Pound",  amount: 327,   type: "Weight" },
  // Currency is relative to a day's wage
  { id: 300, name: "A Day's Wage", amount: 1,     type: "Currency" },
  { id: 301, name: "Lepton",       amount: 1/128, type: "Currency" },
  { id: 302, name: "Quadrons",     amount: 1/64,  type: "Currency" },
  { id: 303, name: "Assarion",     amount: 1/16,  type: "Currency" },
  { id: 304, name: "Denarius",     amount: 1,     type: "Currency" },
  { id: 305, name: "Drachma",      amount: 1,     type: "Currency" },
  { id: 306, name: "Didrachma",    amount: 2,     type: "Currency" },
  { id: 307, name: "Tetradrachma", amount: 4,     type: "Currency" },
  { id: 308, name: "Mina",         amount: 100,   type: "Currency" },
  { id: 309, name: "Talent",       amount: 60000, type: "Currency" },
  // Liquid Measures are based on Liters
  { id: 401, name: "Bath",  amount: 22,   type: "Liquid" },
  { id: 402, name: "Cor",   amount: 220,  type: "Liquid" },
  { id: 403, name: "Hin",   amount: 3.67, type: "Liquid" },
  { id: 404, name: "Liter", amount: 1,    type: "Liquid" },
  { id: 405, name: "Log",   amount: 0.31, type: "Liquid" },
  // Dry Measures are based on Liters
  { id: 501, name: "Cab",   amount: 1.22, type: "Dry" },
  { id: 502, name: "Ephah", amount: 22,   type: "Dry" },
  { id: 503, name: "Homer", amount: 220,  type: "Dry" },
  { id: 504, name: "Liter", amount: 1,    type: "Dry" },
  { id: 505, name: "Omer",  amount: 2.2,  type: "Dry" },
  { id: 506, name: "Seah",  amount: 7.33, type: "Dry" },
  { id: 507, name: "Quart", amount: 1.08, type: "Dry" },
];