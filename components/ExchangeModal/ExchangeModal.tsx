import React from 'react'
import { connect } from 'react-redux'

// import { setWalletView } from '../../store'
import { IWallet } from '../../shared/types'
// import { numberWithCommas } from '../../utils'
// import { WalletView } from '../../styles'

interface IProps {
  wallet: string;
  wallets: IWallet[];
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
  }

  public render() {
    console.log('ExchangeModal', this.props);
    return (
      <div>
        Exchange Currencies
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  // setWalletView: (walletView: string) =>
  //   dispatch(setWalletView(walletView)),
  // depositIntoWallet: (walletName: string, depositAmount: number) =>
  //   dispatch(depositIntoWallet(walletName, depositAmount)),
  // withdrawIntoWallet: (walletName: string, withdrawAmount: number) =>
  //   dispatch(withdrawIntoWallet(walletName, withdrawAmount))
});

// const mapStateToProps = (state: { wallets: IWallet[] }) => ({
//   wallets: state.wallets
// });

export const ExchangeModalJest = ExchangeModal;

export default connect(null, mapDispatchToProps)(ExchangeModal);
