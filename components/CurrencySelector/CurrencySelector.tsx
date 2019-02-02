import React from 'react'

import { IWallet } from '../../shared/types'

interface IProps {
  currency: string;
  wallets: IWallet[];
  onChangeCurrency(currency: string): void;
}

interface IState {
  currency: string;
}

export default class CurrencySelector extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currency: props.currency
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <section>
        <label htmlFor="currency-select">Currency </label>
        <select
          value={this.state.currency}
          onChange={this.handleChange}
        >
          {this.props.wallets.map((wallet) => {
            const type = wallet.currency;
            return <option key={type} value={type}>{type}</option>
          })}
        </select>
      </section>
    );
  }
  
  handleChange(event: React.FormEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const currency: string = target.value;
    this.setState({ currency });
    this.props.onChangeCurrency(currency);
  }
}
