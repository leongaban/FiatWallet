import React from 'react'

import { HeaderStyle } from '../../styles'

interface IProps {
  total: string;
}

export default function Header(props: IProps) {
  return (
    <HeaderStyle>
      <h1>My Fiat Wallet</h1>
      <h2><span>{props.total}</span> total value.</h2>
    </HeaderStyle>
  );
}
