import React from 'react'
import { connect } from 'react-redux'

import {
  setWalletView,
  depositIntoWallet,
  withdrawIntoWallet,
  toggleExchangeModal
} from '../../store'
import { IAsset, IWallet } from '../../shared/types'
import { numberWithCommas } from '../../utils'
import { WalletView, WalletInfo, WalletInputGroup, WideButton } from '../../styles'

interface IProps {
  assets: IAsset[],
  view: string;
  walletView: string;
  wallet?: IWallet;
  wallets: IWallet[];
  setWalletView(walletView: string): void;
  depositIntoWallet(walletName: string, depositAmount: number): void;
  withdrawIntoWallet(walletName: string, withdrawAmount: number): void;
  toggleExchangeModal(exchangeModal: boolean): void;
  calculateValue(wallet: IWallet, assets: IAsset[]): void;
}

interface IState {
  depositAmount: number;
  withdrawAmount: number;
}

class Wallet extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      depositAmount: 0,
      withdrawAmount: 0
    };

    this.handleChangeDeposit = this.handleChangeDeposit.bind(this);
    this.handleChangeWithdraw = this.handleChangeWithdraw.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleExchangeClick = this.handleExchangeClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  public render() {
    const { assets, calculateValue, wallet, walletView } = this.props;
    const { depositAmount, withdrawAmount } = this.state;
    const amount = wallet && wallet.amount;
    const currency = wallet && wallet.currency;

    return (
      <WalletView>
        <h1>{currency}</h1>
        <WalletInfo>
          <h2>Amount: {numberWithCommas(amount)}</h2>
          <h2>{wallet && calculateValue(wallet, assets)} ({currency})</h2>
        </WalletInfo>
        <WalletInputGroup>
          <input
            type="text"
            value={depositAmount}
            onChange={this.handleChangeDeposit}
          />
          <button onClick={this.handleDeposit}>Deposit</button>
        </WalletInputGroup>
        <WalletInputGroup>
          <input
            type="text"
            value={withdrawAmount}
            onChange={this.handleChangeWithdraw}
          />
          <button onClick={this.handleWithdraw}>Withdraw</button>
        </WalletInputGroup>
        <section>
          <WideButton onClick={this.handleExchangeClick}>Exchange</WideButton>
          <WideButton onClick={this.handleBack}>« Back to Wallets</WideButton>
        </section>
      </WalletView>
    );
  }

  handleChangeDeposit(event: React.ChangeEvent<HTMLInputElement>) {
    const depositAmount = Number(event.target.value);
    this.setState({depositAmount});
  }

  handleChangeWithdraw(event: React.ChangeEvent<HTMLInputElement>) {
    const withdrawAmount = Number(event.target.value);
    this.setState({withdrawAmount});
  }

  handleDeposit() {
    const { depositAmount } = this.state;
    const { wallet, depositIntoWallet } = this.props;
    wallet && depositIntoWallet(wallet.currency, depositAmount);
  }

  handleWithdraw() {
    const { withdrawAmount } = this.state;
    const { wallet, withdrawIntoWallet } = this.props;
    wallet && withdrawIntoWallet(wallet.currency, withdrawAmount);
  }

  handleExchangeClick() {
    this.props.toggleExchangeModal(true);
  }

  handleBack() {
    this.props.toggleExchangeModal(false);
    this.props.setWalletView('ALL');
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setWalletView: (walletView: string) =>
    dispatch(setWalletView(walletView)),
  depositIntoWallet: (walletName: string, depositAmount: number) =>
    dispatch(depositIntoWallet(walletName, depositAmount)),
  withdrawIntoWallet: (walletName: string, withdrawAmount: number) =>
    dispatch(withdrawIntoWallet(walletName, withdrawAmount)),
  toggleExchangeModal: (exchangeModal: boolean) =>
    dispatch(toggleExchangeModal(exchangeModal))
});

const mapStateToProps = (state: { assets: IAsset[], walletView: string }) => ({
  assets: state.assets,
  walletView: state.walletView
});

export const WalletJest = Wallet;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
