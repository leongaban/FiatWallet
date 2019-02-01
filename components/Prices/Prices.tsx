import React from 'react'

import { prices } from '../../styles'
import { IAsset } from '../../shared/types'

const { PriceList } = prices;

interface IProps {
  assets: IAsset[]
}

const renderAssetRow = ({ currency, rate }: IAsset) => {
  return (
    <li key={currency}>
      <span>{currency}</span><span>{rate}</span>
    </li>
  )
};

export default class Prices extends React.PureComponent<IProps> {
  public render() {
    const { assets } = this.props;

    return (
      <PriceList>
        <ul>
          {assets.map((asset) => (renderAssetRow(asset)))}
          <li><span>USD</span><span>1.00</span></li>
          <li><span>EUR</span><span>1.14</span></li>
          <li><span>CHF</span><span>1.01</span></li>
        </ul>
      </PriceList>
    );
  }     
}
