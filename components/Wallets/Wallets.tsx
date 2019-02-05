import React from 'react'
import { connect } from 'react-redux'

import { setWalletView } from '../../store'
import { IAsset, IWallet } from '../../shared/types'
import { WalletsListContainer, WalletsListItem, WalletInfo } from '../../styles'
import { numberWithCommas, roundFloat } from '../../utils'

interface IProps {
  assets: IAsset[];
  currency: string;
  wallets: IWallet[];
  walletView: string;
  setWalletView(walletView: string): void;
}

class Wallets extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleWalletSelect = this.handleWalletSelect.bind(this);
    this.calculateValue = this.calculateValue.bind(this);
  }

  public render() {
    const { currency, walletView } = this.props;
 
    return (
      <WalletsListContainer>
        <section>
          {this.props.wallets.map((wallet) =>
            (<WalletsListItem
              key={wallet.currency}
              onClick={() => this.handleWalletSelect(wallet.currency)}
             >
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

  handleWalletSelect(walletView: string) {
    this.props.setWalletView(walletView);
  }

  calculateValue(wallet: IWallet) {
    const { currency, amount } = wallet;
    const { assets } = this.props;
    const conversion = assets.filter((asset) => asset.currency === currency)[0];
    return roundFloat(amount * conversion.rate, 2);
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setWalletView: (walletView: string) => dispatch(setWalletView(walletView))
});

const mapStateToProps = (state: { walletView: string }) => ({
  walletView: state.walletView
});

export const WalletsJest = Wallets;

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);
