import { IAsset, IWallet } from '../shared/types'

export const numberWithCommas = (x: number = 0) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function roundFloat(x: number, decimal: number) {
  const precision = Math.pow(10, decimal);
  return Math.round(x * precision) / precision;
};

export function calculateValue(wallet: IWallet, assets: IAsset[]) {
  const { currency, amount } = wallet;
  const conversion = assets.filter((asset) => asset.currency === currency)[0];
  return numberWithCommas(roundFloat(amount * conversion.rate, 2));
}
