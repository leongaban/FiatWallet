export interface IinitialState {
  assets: IAsset[];
  currency: string;
  wallets: any[];
  transactions: any[];
  view: string;
  walletView: string;
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

export interface IWalletsState {
  walletView: string;
  wallets: IWallet[];
}
