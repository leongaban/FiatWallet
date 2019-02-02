export interface IinitialState {
  assets: IAsset[];
  wallets: any[];
  currency: string;
  view: string;
}

export interface IAsset {
  currency: string;
  rate: number;
}

export interface IWallet {
  currency: string;
  amount: number;
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
