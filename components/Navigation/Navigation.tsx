import React from 'react'

export default class Navigation extends React.PureComponent {
  public render() {
    return (
      <section>
        <nav>
          <button>Prices</button>
          <button>Wallets</button>
        </nav>
      </section>
    );
  }     
}
