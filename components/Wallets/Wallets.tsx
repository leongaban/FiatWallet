import React from 'react'

import { IAsset, IWallet } from '../../shared/types'
import { WalletsListContainer, WalletsListItem, WalletInfo } from '../../styles'
import { numberWithCommas, roundFloat } from '../../utils'

interface IProps {
  assets: IAsset[];
  currency: string;
  wallets: IWallet[];
}

export default class Navigation extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.calculateValue = this.calculateValue.bind(this);
  }

  public render() {
    const { currency } = this.props;
 
    return (
      <WalletsListContainer>
        <section>
          {this.props.wallets.map((wallet) =>
            (<WalletsListItem key={wallet.currency}>
              <h1>{wallet.currency} Wallet</h1>
              <WalletInfo>
                <h2>Amount: {numberWithCommas(wallet.amount)}</h2>
                <h2>{this.calculateValue(wallet)} ({currency})</h2>
              </WalletInfo>
            </WalletsListItem>))}
        </section>
      </WalletsListContainer>
    );
  }

  calculateValue(wallet: IWallet) {
    const { currency, amount } = wallet;
    const { assets } = this.props;
    const conversion = assets.filter((asset) => asset.currency === currency)[0];
    return roundFloat(amount * conversion.rate, 2);
  }
}
