export interface IAsset {
  currency: string;
  rate: number;
}

export interface IRatesRes {
  data: IRatesData
}

export interface IRatesData {
  base: string;
  date: string;
  rates: any;
  success: boolean;
  timestamp: number;
}
