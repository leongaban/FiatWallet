import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'

import Page from '../components/Page/Page'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
