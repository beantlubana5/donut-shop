interface AllDonuts {
  results: Donut[];
}

export interface DonutDetail {
  id: number;
  name: string;
  calories: number;
  extras: string[];
  photo: string;
  photo_attribution: string;
}

export default interface Donut {
  id: number;
  name: string;
  ref: string;
  photo: string;
  photo_attribution: string;
}
