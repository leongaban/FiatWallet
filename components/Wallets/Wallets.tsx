import React from 'react'
import { connect } from 'react-redux'

import { setWalletView } from '../../store'
import { WalletsList, Wallet } from '../' // components
import { IAsset, IWallet, IWalletsState } from '../../shared/types'
import { WalletsListContainer } from '../../styles'
import { calculateValue } from '../../utils'

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
  }

  public render() {
    const { assets, currency, wallets, walletView } = this.props;

    const walletListProps = {
      assets,
      currency,
      wallets,
      handleWalletSelect: this.handleWalletSelect,
      calculateValue
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
            calculateValue={calculateValue}
          />}
      </WalletsListContainer>
    );
  }

  handleWalletSelect(walletView: string) {
    this.props.setWalletView(walletView);
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
