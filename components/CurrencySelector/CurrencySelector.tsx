import React from 'react'

export default class CurrencySelector extends React.PureComponent {
  public render() {
    return (
      <section>
        <label htmlFor="currency-select">Currency </label>
        <select id="currency-select">
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="chf">CHF</option>
        </select>
      </section>
    );
  }     
}

// Dispatches action to change default currency and get new Prices List
