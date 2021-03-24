// Import polyfills
import { polyfill as smoothSrollPolyfill } from 'smoothscroll-polyfill'

// Import libs
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { InstantSearch } from 'react-instantsearch-dom'

// Load store
import store from './state'

// Import APIs so they can load their configurations
import GraphQLClient from './API/graphql_api'
import i18n from './i18n/i18n'
import UserProvider from './components/LoggedInUser/UserProvider'
import { searchClient } from './lib/algolia'

// Import router
import CFRouter from './router'

// Import styles
import './styles/application.sass'
import theme from './styles/theme'

// Activate polyfills
smoothSrollPolyfill()

// When a change is detected we tell webpack to accept the updated module
if (module.hot) {
  module.hot.accept()
}

const App = () => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <ApolloProvider client={GraphQLClient}>
        <I18nextProvider i18n={i18n}>
          <UserProvider>
            <InstantSearch searchClient={searchClient} indexName="dev_videos">
              <CFRouter />
            </InstantSearch>
          </UserProvider>
        </I18nextProvider>
      </ApolloProvider>
    </ReduxProvider>
  </ThemeProvider>
)

export default hot(App)
