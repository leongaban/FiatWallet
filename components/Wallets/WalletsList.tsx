import React from 'react'

import { IWallet } from '../../shared/types'
import { numberWithCommas } from '../../utils'
import { WalletsListItem, WalletInfo } from '../../styles'

interface IProps {
  currency: string;
  wallets: IWallet[];
  handleWalletSelect(curreny: string): void;
  calculateValue(wallet: IWallet): void;
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
            <h2>{props.calculateValue(wallet)} ({props.currency})</h2>
          </WalletInfo>
        </WalletsListItem>))}
    </section>
  );
}
