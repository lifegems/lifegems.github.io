export interface Measure {
  amount: number;
  id: number;
  name: string;
  type: string;
}

export interface MeasureValue {
  measure: Measure;
  value: number;
}