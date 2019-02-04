import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Meta } from '../../components'
import { StyledPage, Inner } from '../../styles'
import '../../global.scss'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  cyan: '#CCF0F0',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  apricot: '#FEBE7E',
  brightPurple: '#B987C0',
  lightPurple: '#8F6894',
  darkPurple: '#57385C',
  darkBlue: '#2536b6',
  margin: 0,
  padding: 0,
  transitionAll: 'all .2s ease-in-out',
  maxWidth: '800px'
};

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after  {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inconsolata', monospace;
  }

  a {
    text-decoration: none;
    color: ${theme.offWhite};
  }
`;

export default class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}
