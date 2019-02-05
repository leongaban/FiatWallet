import React from 'react'
import { connect } from 'react-redux'

import { setWalletView } from '../../store'
import { WalletsList, Wallet } from '../' // components
import { IAsset, IWallet, IWalletsState } from '../../shared/types'
import { WalletsListContainer } from '../../styles'
import { roundFloat } from '../../utils'

interface IProps {
  assets: IAsset[];
  currency: string;
  wallets: IWallet[];
  walletView: string;
  setWalletView(walletView: string): void;
}

const pluckWallet = (walletView: string, wallets: IWallet[]) =>
  wallets.filter((wallet) => wallet.currency === walletView)[0];

class Wallets extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleWalletSelect = this.handleWalletSelect.bind(this);
    this.calculateValue = this.calculateValue.bind(this);
  }

  public render() {
    const { currency, wallets, walletView } = this.props;

    const walletListProps = {
      currency,
      wallets,
      handleWalletSelect: this.handleWalletSelect,
      calculateValue: this.calculateValue
    };

    const selectedWallet = walletView !== 'ALL' ? pluckWallet(walletView, wallets) : undefined;
 
    return (
      <WalletsListContainer>
        {walletView === 'ALL' ?
          <WalletsList {...walletListProps}/> :
          <Wallet
            view={walletView}
            wallet={selectedWallet}
            wallets={wallets}
            calculateValue={this.calculateValue}
          />}
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

const mapStateToProps = (state: IWalletsState) => ({
  walletView: state.walletView,
  wallets: state.wallets
});

export const WalletsJest = Wallets;

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);
