import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import store, { history } from './store'
import App from './components/App'
import 'sanitize.css/sanitize.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App></App>
      </ConnectedRouter>
    </Provider>
  ,
  target
)
