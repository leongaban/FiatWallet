import React from 'react'
import { connect } from 'react-redux'

import { startGetRates, setCurrency, setView } from '../store'
import { IinitialState, IAsset, IWallet, IRatesRes } from '../shared/types'
import { numberWithCommas, roundFloat } from '../utils'
import {
  CurrencySelector,
  Header,
  Prices,
  Navigation,
  Wallets,
  ExchangeModal
} from '../components'

interface IProps {
  assets: IAsset[];
  wallets: IWallet[];
  exchangeModal: boolean;
  walletView: string;
  currency: string;
  view: string;
  startGetRates(currency: string): IRatesRes;
  setCurrency(currency: string): void;
  setView(view: string): void;
}

interface IConvertedRate {
  convertedRate: number;
}

const renderExchangeModal = ({walletView, wallets}: IProps) => {
  return <ExchangeModal wallet={walletView} wallets={wallets}/>
};

const renderView = ({assets, currency, view}: IProps) => {
  switch (view) {
    case 'wallets':
      return <Wallets assets={assets} currency={currency}/>;
    default: 
      return <Prices assets={assets}/>;
  }
};

class FiatWallet extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
  }

  componentDidMount() {
    const { currency, startGetRates } = this.props;
    startGetRates(currency);
  }

  public render() {
    const { currency, wallets, view, exchangeModal } = this.props;

    return (
      <section>
        <CurrencySelector
          currency={currency}
          wallets={wallets}
          onChangeCurrency={this.handleChangeCurrency}
        />
        <Header total={this.calculateTotalValue(wallets)}/>
        {exchangeModal && renderExchangeModal(this.props)}
        {renderView(this.props)}
        <Navigation view={view} onChangeView={this.handleChangeView} />
      </section>
    );
  }

  handleChangeCurrency(currency: string) {
    this.props.startGetRates(currency);
    this.props.setCurrency(currency);
  }

  handleChangeView(view: string) {
    this.props.setView(view);
  }

  calculateTotalValue(wallets: IWallet[]) {
    const { assets } = this.props;
    
    const convertedRates = wallets.map((wallet) => {
      const conversion = assets.filter((asset) => asset.currency === wallet.currency)[0];

      if (conversion) {
        return {
          convertedRate: roundFloat(wallet.amount * conversion.rate, 2)
        };
      }

      return { convertedRate: 0 };
    });

    const total = convertedRates.reduce(function(sum: number, wallet: IConvertedRate) {
      return sum + wallet.convertedRate;
    }, 0);

    return numberWithCommas(roundFloat(total, 2)).toString();
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  startGetRates: (currency: string) => dispatch(startGetRates(currency)),
  setCurrency: (currency: string) => dispatch(setCurrency(currency)),
  setView: (view: string) => dispatch(setView(view))
});

const mapStateToProps = (state: IinitialState) => ({
  assets: state.assets,
  wallets: state.wallets,
  currency: state.currency,
  view: state.view,
  walletView: state.walletView,
  exchangeModal: state.exchangeModal
});

export const FiatWalletJest = FiatWallet;

export default connect(mapStateToProps, mapDispatchToProps)(FiatWallet);
