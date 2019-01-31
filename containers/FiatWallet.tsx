import React from 'react'

import { CurrencySelector, Header, Prices, Navigation } from '../components'

export default class FiatWallet extends React.PureComponent {
  public render() {
    return (
      <section>
        <CurrencySelector />
        <Header />
        <Prices />
        <Navigation />
      </section>
    );
  }     
}
