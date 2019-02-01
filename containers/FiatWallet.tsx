import React from 'react'
import { connect } from 'react-redux'

import { startGetRates, IRatessRes } from '../store'
import { CurrencySelector, Header, Prices, Navigation } from '../components'

interface IProps {
  assets: [];
  wallets: [];
  defaultCurreny: string;
  startGetRates(defaultCurreny: string): IRatessRes;
}

class FiatWallet extends React.PureComponent<IProps> {
  componentDidMount() {
    const { defaultCurreny, startGetRates } = this.props;
    startGetRates(defaultCurreny);
  }

  public render() {
    const { assets, } = this.props;
    return (
      <section>
        <CurrencySelector />
        <Header />
        <Prices prices={assets} />
        <Navigation />
      </section>
    );
  }     
}

const mapDispatchToProps = (dispatch: any) => ({
  startGetRates: (defaultCurreny: string) => dispatch(startGetRates(defaultCurreny))
});

const mapStateToProps = (state: any) => ({
  assets: state.assets,
  wallets: state.wallets,
  defaultCurrency: state.defaultCurrency
});

export const BoardJest = FiatWallet;

export default connect(mapStateToProps, mapDispatchToProps)(FiatWallet);
