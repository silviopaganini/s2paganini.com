import React from 'react'
import ReactDOM from 'react-dom'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import theme, { GlobalStyle } from './theme'
import Provider from './context'

import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cjt00t9oxigpy01ckog5bx6vc/master',
  }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
