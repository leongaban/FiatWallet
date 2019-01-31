import React from 'react'

export default class FiatWallet extends React.PureComponent {
  public render() {
    return (
      <section>
        <section>
        <label htmlFor="currency-select">Currency</label>
        <select id="currency-select">
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
            <option value="chf">CHF</option>
        </select>
        </section>
        <header>
          <h1>~ My Fiat Wallet ~</h1>
          <h2><span>$1600</span>total value.</h2>
        </header>
        <section>
          <ul>
            <li><span>USD</span><span>1.00</span></li>
            <li><span>EUR</span><span>1.14</span></li>
            <li><span>CHF</span><span>1.01</span></li>
          </ul>
        </section>
        <section>
          <nav>
            <button>Prices</button>
            <button>Wallets</button>
          </nav>
        </section>
      </section>
    );
  }     
}
