import React from 'react'

import { prices } from '../../styles'

const { PriceList } = prices;

interface IProps {
  prices: []
}

export default class Prices extends React.PureComponent<IProps> {
  public render() {
    return (
      <PriceList>
        <ul>
          <li><span>USD</span><span>1.00</span></li>
          <li><span>EUR</span><span>1.14</span></li>
          <li><span>CHF</span><span>1.01</span></li>
        </ul>
      </PriceList>
    );
  }     
}
