import React from 'react'

import { PriceList } from '../../styles'
import { IAsset } from '../../shared/types'

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
          {assets && assets.map((asset) => (renderAssetRow(asset)))}
          {!assets && <li><span>Loading asset rates...</span></li>}
        </ul>
      </PriceList>
    );
  }
}
