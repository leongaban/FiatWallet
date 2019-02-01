import React from 'react'
import { connect } from 'react-redux'

import { startGetRates } from '../store'
import { IinitialState, IAsset, IRatesRes } from '../shared/types'
import { CurrencySelector, Header, Prices, Navigation } from '../components'

interface IProps {
  assets: IAsset[];
  wallets: any[];
  currency: string;
  startGetRates(currency: string): IRatesRes;
}

interface IStateProps {
  assets: IAsset[];
  wallets: any[];
  currency: string;
}

class FiatWallet extends React.PureComponent<IProps, IStateProps> {
  componentDidMount() {
    const { currency, startGetRates } = this.props;
    startGetRates(currency);
  }

  public render() {
    const { assets, currency } = this.props;
    console.log('FiatWallet currency:', currency);
    return (
      <section>
        <CurrencySelector
          currency={currency}
          onChangeCurrency={this.handleChangeCurrency}
        />
        <Header />
        <Prices assets={assets} />
        <Navigation />
      </section>
    );
  }

  handleChangeCurrency(currency: string) {
    console.log('handleChangeCurrency', currency);
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  startGetRates: (currency: string) => dispatch(startGetRates(currency))
});

const mapStateToProps = (state: IinitialState) => ({
  assets: state.assets,
  wallets: state.wallets,
  currency: state.currency
});

export const BoardJest = FiatWallet;

export default connect(mapStateToProps, mapDispatchToProps)(FiatWallet);
