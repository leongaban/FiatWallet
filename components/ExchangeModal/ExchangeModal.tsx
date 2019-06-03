import React from 'react'
import { connect } from 'react-redux'

import { toggleExchangeModal } from '../../store'
import { IAsset, IWallet } from '../../shared/types'
import { ExchangeSection, ExchangeList, CloseButton } from '../../styles'
import { calculateValue, numberWithCommas } from '../../utils'

interface IProps {
  assets: IAsset[];
  wallet: string;
  wallets: IWallet[];
  toggleExchangeModal(exchangeModal: boolean): void;
}

interface IState {
  view: string;
}

class ExchangeModal extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      view: 'selection' // exchange
    };

    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  public render() {
    const { assets, wallet: currentWallet, wallets } = this.props;
    const filteredWallets = wallets.filter((wallet) => wallet.currency !== currentWallet);

    return (
      <ExchangeSection>
        <CloseButton onClick={this.handleCloseButton}>Close (X)</CloseButton>
        <h1>Exchange ({currentWallet})</h1>
        <h2>Select currency for exchange</h2>
        <ExchangeList>
          {filteredWallets.map((wallet) => (
            <li key={wallet.currency}>
              <button>
                <span>{wallet.currency}</span>
                <span>{numberWithCommas(wallet.amount)}</span>
                <span>{calculateValue(wallet, assets)} ({currentWallet})</span>
              </button>
            </li>
          ))}
        </ExchangeList>
      </ExchangeSection>
    );
  }

  handleCloseButton() {
    this.props.toggleExchangeModal(false);
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleExchangeModal: (exchangeModal: boolean) =>
    dispatch(toggleExchangeModal(exchangeModal))
});

const mapStateToProps = (state: { assets: IAsset[] }) => ({
  assets: state.assets
});

export const ExchangeModalJest = ExchangeModal;

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeModal);
