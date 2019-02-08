import React from 'react'

import { IAsset, IWallet } from '../../shared/types'
import { numberWithCommas } from '../../utils'
import { WalletsListItem, WalletInfo } from '../../styles'

interface IProps {
  assets: IAsset[],
  currency: string;
  wallets: IWallet[];
  handleWalletSelect(curreny: string): void;
  calculateValue(wallet: IWallet, assets: IAsset[]): void;
}

export default function WalletsList(props: IProps) {
  return (
    <section>
      {props.wallets.map((wallet) =>
        (<WalletsListItem
            key={wallet.currency}
            onClick={() => props.handleWalletSelect(wallet.currency)}
          >
          <h1>{wallet.currency} Wallet</h1>
          <WalletInfo>
            <h2>Amount: {numberWithCommas(wallet.amount)}</h2>
            <h2>{props.calculateValue(wallet, props.assets)} ({props.currency})</h2>
          </WalletInfo>
        </WalletsListItem>))}
    </section>
  );
}
