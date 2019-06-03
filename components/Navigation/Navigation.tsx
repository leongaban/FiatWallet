import React from 'react'

import { ActiveButton, NavButton, NavSection } from '../../styles'

interface IProps {
  view: string;
  onChangeView(view: string): void;
}

export default class Navigation extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    const { view } = this.props;
    const BtnPrices = view === 'prices' ? ActiveButton : NavButton;
    const BtnWallets = view === 'wallets' ? ActiveButton : NavButton;

    return (
      <NavSection>
        <BtnPrices onClick={() => this.handleChange('prices')}>Prices</BtnPrices>
        <BtnWallets onClick={() => this.handleChange('wallets')}>Wallets</BtnWallets>
      </NavSection>
    );
  }
  
  handleChange(view: string) {
    this.props.onChangeView(view);
  }
}
