import React from 'react'

export default class Prices extends React.PureComponent {
  public render() {
    return (
      <section>
        <ul>
          <li><span>USD</span><span>1.00</span></li>
          <li><span>EUR</span><span>1.14</span></li>
          <li><span>CHF</span><span>1.01</span></li>
        </ul>
      </section>
    );
  }     
}
