import React from 'react'

export default class Header extends React.PureComponent {
  public render() {
    return (
      <header>
        <h1>~ My Fiat Wallet ~</h1>
        <h2><span>$1600</span>total value.</h2>
      </header>
    );
  }     
}
