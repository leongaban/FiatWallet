import React from 'react'

import { header } from '../../styles'

const { HeaderStyle } = header;

export default class Header extends React.PureComponent {
  public render() {
    return (
      <HeaderStyle>
        <h1>My Fiat Wallet</h1>
        <h2><span>$1600</span> total value.</h2>
      </HeaderStyle>
    );
  }     
}
