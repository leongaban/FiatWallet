import React from 'react'

import { NavButton, NavSection } from '../../styles'

interface IProps {
  onChangeView(view: string): void;
}

export default class Navigation extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <NavSection>
        <NavButton onClick={() => this.handleChange('prices')}>Prices</NavButton>
        <NavButton onClick={() => this.handleChange('wallets')}>Wallets</NavButton>
      </NavSection>
    );
  }
  
  handleChange(view: string) {
    this.props.onChangeView(view);
  }
}
