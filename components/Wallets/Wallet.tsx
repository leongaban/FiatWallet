import React from 'react'
import { connect } from 'react-redux'

import { setWalletView, depositIntoWallet, withdrawIntoWallet } from '../../store'
import { IWallet } from '../../shared/types'
import { numberWithCommas } from '../../utils'
import { WalletView, WalletInfo, WalletInputGroup, WideButton } from '../../styles'
import ExchangeModal from '../ExchangeModal/ExchangeModal';

interface IProps {
  view: string;
  walletView: string;
  wallet?: IWallet;
  wallets: IWallet[];
  setWalletView(walletView: string): void;
  depositIntoWallet(walletName: string, depositAmount: number): void;
  withdrawIntoWallet(walletName: string, withdrawAmount: number): void;
  calculateValue(wallet: IWallet): void;
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
    const { calculateValue, wallet, walletView } = this.props;
    const { depositAmount, withdrawAmount } = this.state;
    const amount = wallet && wallet.amount;
    const currency = wallet && wallet.currency;

    console.log('walletView', walletView);

    return (
      <WalletView>
        <h1>{currency}</h1>
        <WalletInfo>
          <h2>Amount: {numberWithCommas(amount)}</h2>
          <h2>{wallet && calculateValue(wallet)} ({currency})</h2>
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
    console.log('handleExchangeClick');
    this.props.setWalletView('exchange');
  }

  handleBack() {
    this.props.setWalletView('ALL');
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setWalletView: (walletView: string) =>
    dispatch(setWalletView(walletView)),
  depositIntoWallet: (walletName: string, depositAmount: number) =>
    dispatch(depositIntoWallet(walletName, depositAmount)),
  withdrawIntoWallet: (walletName: string, withdrawAmount: number) =>
    dispatch(withdrawIntoWallet(walletName, withdrawAmount))
});

const mapStateToProps = (state: { walletView: string }) => ({
  walletView: state.walletView
});

export const WalletJest = Wallet;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
