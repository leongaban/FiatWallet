import React from 'react'

interface IProps {
  currency: string;
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
          <option value="USD">USD</option>
          <option value="EUR">EURO</option>
          <option value="CHF">CHF</option>
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
